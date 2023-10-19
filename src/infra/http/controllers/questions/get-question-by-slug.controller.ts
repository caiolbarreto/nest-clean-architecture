import { Controller, Get, BadRequestException, Param } from '@nestjs/common'
import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-cases/get-question-by-slug'
import { QuestionDetailsPresenter } from '../../presenters/question-details-presenter'

@Controller('/questions/:slug')
export class GetQuestionsBySlugController {
  constructor(private getQuestionsBySlug: GetQuestionBySlugUseCase) {}

  @Get()
  async handle(@Param('slug') slug: string) {
    const result = await this.getQuestionsBySlug.execute({
      slug,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    return {
      question: QuestionDetailsPresenter.toHTTP(result.value.question),
    }
  }
}
