import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  // 🔹 REGISTER
  async createUser(data: any) {
    const hashed = await bcrypt.hash(data.passwordHash, 10);

    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        passwordHash: hashed
      }
    });
  }

  // 🔹 LOGIN
  async login(data: any) {
    const user = await this.prisma.user.findUnique({
      where: { email: data.email }
    });

    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(
      data.passwordHash,
      user.passwordHash
    );

    if (!isMatch) {
      throw new Error('Invalid password');
    }

    const token = this.jwtService.sign({
      userId: user.id,
      email: user.email
    });

    return {
      message: 'Login successful',
      token
    };
  }

  // 🔹 GET ALL USERS
  async getUsers() {
    return this.prisma.user.findMany();
  }

  // 🔥 REAL PROFILE (DB se)
  async getProfile(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) return null;

    // password hide
    const { passwordHash, ...result } = user;
    return result;
  }
}