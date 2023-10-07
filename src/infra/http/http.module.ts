import { Module } from '@nestjs/common'
import { CreateAccountController } from './controllers/Account/create-account.controller'
import { AuthController } from './controllers/Auth/auth.controller'
import { CreateQuestionsController } from './controllers/Questions/create-question.controller'
import { FetchRecentQuestionsController } from './controllers/Questions/fetch-recent-questions.controller'
import { DatabaseModule } from '../database/database.module'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-recent-questions'
import { RegisterStudentUseCase } from '@/domain/forum/application/use-cases/register-student'
import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-cases/authenticate-student'
import { CryptographyModule } from '../cryptography/cryptography-module'
import { GetQuestionsBySlugController } from './controllers/Questions/get-question-by-slug.controller'
import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-cases/get-question-by-slug'
import { EditQuestionController } from './controllers/Questions/edit-question.controller'
import { EditQuestionUseCase } from '@/domain/forum/application/use-cases/edit-question'
import { DeleteQuestionController } from './controllers/Questions/delete-question.controller'
import { DeleteQuestionUseCase } from '@/domain/forum/application/use-cases/delete-question'
import { AnswerQuestionController } from './controllers/Answers/answer-question.controller'
import { AnswerQuestionUseCase } from '@/domain/forum/application/use-cases/answer-question'
import { EditAnswerController } from './controllers/Answers/edit-answer.controller'
import { EditAnswerUseCase } from '@/domain/forum/application/use-cases/edit-answer'
import { DeleteAnswerController } from './controllers/Answers/delete-question.controller'
import { DeleteAnswerUseCase } from '@/domain/forum/application/use-cases/delete-answer'
import { FetchQuestionAnswersController } from './controllers/Answers/fetch-question-answers.controller'
import { FetchQuestionAnswersUseCase } from '@/domain/forum/application/use-cases/fetch-question-answers'

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    CreateAccountController,
    AuthController,
    CreateQuestionsController,
    FetchRecentQuestionsController,
    GetQuestionsBySlugController,
    EditQuestionController,
    DeleteQuestionController,
    AnswerQuestionController,
    EditAnswerController,
    DeleteAnswerController,
    FetchQuestionAnswersController,
  ],
  providers: [
    CreateQuestionUseCase,
    FetchRecentQuestionsUseCase,
    RegisterStudentUseCase,
    AuthenticateStudentUseCase,
    GetQuestionBySlugUseCase,
    EditQuestionUseCase,
    DeleteQuestionUseCase,
    AnswerQuestionUseCase,
    EditAnswerUseCase,
    DeleteAnswerUseCase,
    FetchQuestionAnswersUseCase,
  ],
})
export class HttpModule {}
