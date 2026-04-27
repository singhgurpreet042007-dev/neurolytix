import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req
} from '@nestjs/common';

import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UserController {

  constructor(private userService: UserService) {}

  // 🔹 REGISTER
  @Post()
  create(@Body() data: any) {
    return this.userService.createUser(data);
  }

  // 🔹 LOGIN
  @Post('login')
  login(@Body() data: any) {
    return this.userService.login(data);
  }

  // 🔹 ALL USERS (Protected)
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUsers() {
    return this.userService.getUsers();
  }

  // 🔥 PROFILE (DB se data)
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: any) {
    return this.userService.getProfile(req.user.userId);
  }
}