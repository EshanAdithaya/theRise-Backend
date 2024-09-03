// src/app.module.ts

import { Module } from '@nestjs/common';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
