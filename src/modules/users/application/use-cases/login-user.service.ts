import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import type { UserRepository } from '../../domain/repositories/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginUserService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepo: UserRepository,
  ) {}

  async execute(email: string, password: string): Promise<Omit<User, 'password'>> {
    const user = await this.userRepo.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
