import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    JwtModule.register({
      secret: 'mysecretkey',
      signOptions: { expiresIn: '1h' },
    }),

    PrismaModule,
    UserModule,
  ],
})
export class AppModule {}