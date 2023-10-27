import { Controller, Get } from '@nestjs/common'
import { Public } from '@/infra/auth/public'

@Controller('/')
@Public()
export class HomeController {
  @Get()
  async handle() {
    return {
      message:
        'You can see the links to use the API in the repository link within each controller',
      link: 'https://github.com/CaiolBarreto/nest-clean-architecture',
    }
  }
}
