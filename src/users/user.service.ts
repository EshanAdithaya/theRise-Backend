// src/users/user.service.ts

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  private users = []; // This will be replaced by a real database

  createUser(createUserDto: CreateUserDto) {
    // Hash the password here before saving
    const { password, confirmPassword, ...rest } = createUserDto;

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    // Hash the password (use bcrypt or any other hashing library)
    const hashedPassword = password; // Replace with hash function
    const newUser = { ...rest, password: hashedPassword, id: this.users.length + 1 };
    this.users.push(newUser);
    return newUser;
  }

  getUsers() {
    return this.users;
  }
}
