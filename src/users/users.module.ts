import { Module } from '@nestjs/common';
import { UserService } from './user.service'; // Corrected import
import { UserController } from './user.controller'; // Corrected import

@Module({
  providers: [UserService], // Corrected provider
  controllers: [UserController], // Corrected controller
  exports: [UserService], // Export if needed elsewhere
})
export class UsersModule {}
