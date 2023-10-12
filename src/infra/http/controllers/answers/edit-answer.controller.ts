import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Param,
  Put,
} from '@nestjs/common'
import { EditAnswerUseCase } from '@/domain/forum/application/use-cases/edit-answer'
import { z } from 'zod'
import { ZodValidationPipe } from '../../pipes/zod-validation-pipe'
import { UserPayload } from '@/infra/auth/jwt.strategy'
import { CurrentUser } from '@/infra/auth/current-user-decorator'

const editAnswerSchema = z.object({
  content: z.string(),
  attachments: z.array(z.string().uuid()),
})

type EditAnswerSchema = z.infer<typeof editAnswerSchema>

const bodyValidationPipe = new ZodValidationPipe(editAnswerSchema)

@Controller('/answers/:id')
export class EditAnswerController {
  constructor(private editAnswer: EditAnswerUseCase) {}

  @Put()
  @HttpCode(204)
  async handle(
    @Body(bodyValidationPipe) body: EditAnswerSchema,
    @CurrentUser() user: UserPayload,
    @Param('id') answerId: string,
  ) {
    const { content, attachments } = body
    const userId = user.sub

    const result = await this.editAnswer.execute({
      content,
      authorId: userId,
      answerId,
      attachmentsIds: attachments,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }
  }
}
