import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: 'mysecretkey',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}