import { Module } from '@nestjs/common'
import { CreateAccountController } from './controllers/Account/create-account.controller'
import { AuthController } from './controllers/Auth/auth.controller'
import { CreateQuestionsController } from './controllers/Questions/create-questions.controller'
import { FetchRecentQuestionsController } from './controllers/Questions/fetch-recent-questions.controller'
import { DatabaseModule } from '../database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateAccountController,
    AuthController,
    CreateQuestionsController,
    FetchRecentQuestionsController,
  ],
})
export class HttpModule {}
