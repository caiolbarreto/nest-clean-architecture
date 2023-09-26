import { BadRequestException, Body, Controller, Post } from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '../../pipes/zod-validation-pipe'
import { UserPayload } from '@/infra/auth/jwt.strategy'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'

const createQuestionsSchema = z.object({
  title: z.string(),
  content: z.string(),
})

type CreateQuestionsSchema = z.infer<typeof createQuestionsSchema>

const bodyValidationPipe = new ZodValidationPipe(createQuestionsSchema)

@Controller('/questions')
export class CreateQuestionsController {
  constructor(private createQuestion: CreateQuestionUseCase) {}

  @Post()
  async handle(
    @Body(bodyValidationPipe) body: CreateQuestionsSchema,
    @CurrentUser() user: UserPayload,
  ) {
    const { title, content } = body
    const userId = user.sub

    const result = await this.createQuestion.execute({
      title,
      content,
      authorId: userId,
      attachmentsIds: [],
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }
  }
}
