import { Injectable, OnModuleDestroy } from '@nestjs/common'
import { Redis } from 'ioredis'
import { EnvService } from '../../env/env.service'

@Injectable()
export class RedisService extends Redis implements OnModuleDestroy {
  constructor(envService: EnvService) {
    super(envService.get('REDIS_URL'))
  }

  onModuleDestroy() {
    return this.disconnect()
  }
}
