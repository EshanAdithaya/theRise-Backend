// src/users/users.module.ts

import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './user.service';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // Export if needed elsewhere
})
export class UsersModule {}
