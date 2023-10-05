import { Module } from '@nestjs/common'
import { CreateAccountController } from './controllers/Account/create-account.controller'
import { AuthController } from './controllers/Auth/auth.controller'
import { CreateQuestionsController } from './controllers/Questions/create-questions.controller'
import { FetchRecentQuestionsController } from './controllers/Questions/fetch-recent-questions.controller'
import { DatabaseModule } from '../database/database.module'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-recent-questions'
import { RegisterStudentUseCase } from '@/domain/forum/application/use-cases/register-student'
import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-cases/authenticate-student'
import { CryptographyModule } from '../cryptography/cryptography-module'
import { GetQuestionsBySlugController } from './controllers/Questions/get-question-by-slug.controller'
import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-cases/get-question-by-slug'
import { EditQuestionsController } from './controllers/Questions/edit-questions.controller'
import { EditQuestionUseCase } from '@/domain/forum/application/use-cases/edit-question'

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    CreateAccountController,
    AuthController,
    CreateQuestionsController,
    FetchRecentQuestionsController,
    GetQuestionsBySlugController,
    EditQuestionsController,
  ],
  providers: [
    CreateQuestionUseCase,
    FetchRecentQuestionsUseCase,
    RegisterStudentUseCase,
    AuthenticateStudentUseCase,
    GetQuestionBySlugUseCase,
    EditQuestionUseCase,
  ],
})
export class HttpModule {}
