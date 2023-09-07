import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './prisma/prisma.service';
import { CreateAccountController } from './controllers/create-account.controller';
import { envSchema } from './env';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true
    }),
    AuthModule
  ],
  controllers: [CreateAccountController, AuthController],
  providers: [PrismaService],
})
export class AppModule {}
