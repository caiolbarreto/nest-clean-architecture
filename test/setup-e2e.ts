import { config } from 'dotenv'

import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'crypto'
import { execSync } from 'child_process'
import { DomainEvents } from '@/core/events/domain-events'
import { envSchema } from '@/infra/env/env'
import Redis, { Redis as ProdRedis } from 'ioredis'

config({ path: '.env', override: true })
config({ path: '.env.test', override: true })

const env = envSchema.parse(process.env)

const localRedisDb = {
  host: env.REDIS_HOST,
  port: env.REDIS_PORT,
  db: env.REDIS_DB,
}

const prodRedisDb = env.REDIS_URL

const redis = prodRedisDb ? new ProdRedis(prodRedisDb) : new Redis(localRedisDb)

const prisma = new PrismaClient()

function generateUniqueDatabaseUrl(schemaId: string) {
  if (!env.DATABASE_URL) {
    throw new Error('Please provide a DATABASE_URL environment variable')
  }

  const url = new URL(env.DATABASE_URL)

  url.searchParams.set('schema', schemaId)

  return url.toString()
}

const schemaId = randomUUID()

beforeAll(async () => {
  const databaseUrl = generateUniqueDatabaseUrl(schemaId)

  process.env.DATABASE_URL = databaseUrl

  DomainEvents.shouldRun = false

  await redis.flushdb()

  execSync('pnpm prisma migrate deploy')
})

afterAll(async () => {
  await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schemaId}" CASCADE`)
  await prisma.$disconnect()
})
