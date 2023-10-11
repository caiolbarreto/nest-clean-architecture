import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Param,
  Put,
} from '@nestjs/common'
import { EditQuestionUseCase } from '@/domain/forum/application/use-cases/edit-question'
import { z } from 'zod'
import { ZodValidationPipe } from '../../pipes/zod-validation-pipe'
import { UserPayload } from '@/infra/auth/jwt.strategy'
import { CurrentUser } from '@/infra/auth/current-user-decorator'

const editQuestionsSchema = z.object({
  title: z.string(),
  content: z.string(),
  attachments: z.array(z.string().uuid()),
})

type EditQuestionsSchema = z.infer<typeof editQuestionsSchema>

const bodyValidationPipe = new ZodValidationPipe(editQuestionsSchema)

@Controller('/questions/:id')
export class EditQuestionController {
  constructor(private editQuestion: EditQuestionUseCase) {}

  @Put()
  @HttpCode(204)
  async handle(
    @Body(bodyValidationPipe) body: EditQuestionsSchema,
    @CurrentUser() user: UserPayload,
    @Param('id') questionId: string,
  ) {
    const { title, content, attachments } = body
    const userId = user.sub

    const result = await this.editQuestion.execute({
      title,
      content,
      authorId: userId,
      attachmentsIds: attachments,
      questionId,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }
  }
}
