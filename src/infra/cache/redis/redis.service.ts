import { Injectable, OnModuleDestroy } from '@nestjs/common'
import { Redis } from 'ioredis'
import { EnvService } from '../../env/env.service'

@Injectable()
export class RedisService extends Redis implements OnModuleDestroy {
  constructor(envService: EnvService) {
    super({
      host: envService.get('REDIS_HOST'),
      port: envService.get('REDIS_PORT'),
      db: envService.get('REDIS_DB'),
    })
  }

  onModuleDestroy() {
    return this.disconnect()
  }
}
