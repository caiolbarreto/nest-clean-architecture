import { Body, Controller, Post, UseGuards, UsePipes } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";
import { z } from 'zod'
import { ZodValidationPipe } from "@/pipes/zod-validation-pipe";
import { JwtAuthGuard } from "@/auth/jwt-auth.guard";
import { UserPayload } from "@/auth/jwt.strategy";
import { CurrentUser } from "@/auth/current-user-decorator";

const createQuestionsSchema = z.object({
  title: z.string(),
  content: z.string()
})

type CreateQuestionsSchema = z.infer<typeof createQuestionsSchema>

const bodyValidationPipe = (new ZodValidationPipe(createQuestionsSchema))

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionsController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async handle(@Body(bodyValidationPipe) body: CreateQuestionsSchema, @CurrentUser() user: UserPayload) {
    const { title, content } = body
    const { sub } = user

    const slug = this.convertToSlug(title)

    await this.prisma.question.create({
      data: {
        title,
        content,
        slug,
        authorId: sub
      }
    })
  }

  private convertToSlug(title: string): string {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
  }
}