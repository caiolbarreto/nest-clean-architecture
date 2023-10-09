import { Module } from '@nestjs/common'
import { CreateAccountController } from './controllers/account/create-account.controller'
import { AuthController } from './controllers/auth/auth.controller'
import { CreateQuestionsController } from './controllers/questions/create-question.controller'
import { FetchRecentQuestionsController } from './controllers/questions/fetch-recent-questions.controller'
import { DatabaseModule } from '../database/database.module'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-recent-questions'
import { RegisterStudentUseCase } from '@/domain/forum/application/use-cases/register-student'
import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-cases/authenticate-student'
import { CryptographyModule } from '../cryptography/cryptography-module'
import { GetQuestionsBySlugController } from './controllers/questions/get-question-by-slug.controller'
import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-cases/get-question-by-slug'
import { EditQuestionController } from './controllers/questions/edit-question.controller'
import { EditQuestionUseCase } from '@/domain/forum/application/use-cases/edit-question'
import { DeleteQuestionController } from './controllers/questions/delete-question.controller'
import { DeleteQuestionUseCase } from '@/domain/forum/application/use-cases/delete-question'
import { AnswerQuestionController } from './controllers/answers/answer-question.controller'
import { AnswerQuestionUseCase } from '@/domain/forum/application/use-cases/answer-question'
import { EditAnswerController } from './controllers/answers/edit-answer.controller'
import { EditAnswerUseCase } from '@/domain/forum/application/use-cases/edit-answer'
import { DeleteAnswerController } from './controllers/answers/delete-question.controller'
import { DeleteAnswerUseCase } from '@/domain/forum/application/use-cases/delete-answer'
import { FetchQuestionAnswersController } from './controllers/answers/fetch-question-answers.controller'
import { FetchQuestionAnswersUseCase } from '@/domain/forum/application/use-cases/fetch-question-answers'
import { ChooseQuestionBestAnswerController } from './controllers/answers/choose-question-best-answer.controller'
import { ChooseQuestionBestAnswerUseCase } from '@/domain/forum/application/use-cases/choose-question-best-answer'
import { CommentOnQuestionController } from './controllers/comments/comment-on-question.controller'
import { CommentOnQuestionUseCase } from '@/domain/forum/application/use-cases/comment-on-question'
import { DeleteQuestionCommentController } from './controllers/comments/delete-question-comment.controller'
import { DeleteQuestionCommentUseCase } from '@/domain/forum/application/use-cases/delete-question-comment'
import { CommentOnAnswerController } from './controllers/comments/comment-on-answer.controller'
import { CommentOnAnswerUseCase } from '@/domain/forum/application/use-cases/comment-on-answer'
import { DeleteAnswerCommentController } from './controllers/comments/delete-comment-on-answer.controller'
import { DeleteAnswerCommentUseCase } from '@/domain/forum/application/use-cases/delete-answer-comment'
import { FetchQuestionCommentsController } from './controllers/comments/fetch-question-comments.controller'
import { FetchQuestionCommentsUseCase } from '@/domain/forum/application/use-cases/fetch-question-comments'
import { FetchAnswerCommentsController } from './controllers/comments/fetch-answer-comments.controller'
import { FetchAnswerCommentsUseCase } from '@/domain/forum/application/use-cases/fetch-answer-comments'
import { UploadAttachmentController } from './controllers/attachments/upload-attachment.controller'

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
    ChooseQuestionBestAnswerController,
    CommentOnQuestionController,
    DeleteQuestionCommentController,
    CommentOnAnswerController,
    DeleteAnswerCommentController,
    FetchQuestionCommentsController,
    FetchAnswerCommentsController,
    UploadAttachmentController,
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
    ChooseQuestionBestAnswerUseCase,
    CommentOnQuestionUseCase,
    DeleteQuestionCommentUseCase,
    CommentOnAnswerUseCase,
    DeleteAnswerCommentUseCase,
    FetchQuestionCommentsUseCase,
    FetchAnswerCommentsUseCase,
  ],
})
export class HttpModule {}
