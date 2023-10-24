import { z } from 'zod'

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_PRIVATE_KEY: z.string(),
  JWT_PUBLIC_KEY: z.string(),
  CLOUDFARE_ACCOUNT_ID: z.string(),
  AWS_BUCKET_NAME: z.string(),
  AWS_SECRET_KEY_ID: z.string(),
  AWS_SECRET_ACCESS_KEY: z.string(),
  REDIS_URL: z.string().optional(),
  REDIS_HOST: z.string().optional(),
  REDIS_PORT: z.coerce.number().optional(),
  REDIS_DB: z.coerce.number().optional(),
  PORT: z.coerce.number().optional().default(3333),
})

export type Env = z.infer<typeof envSchema>
