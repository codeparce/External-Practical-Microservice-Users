import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';
import { UserOrmEntity } from './user.orm-entity';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(UserOrmEntity)
    private readonly repo: Repository<UserOrmEntity>,
  ) {}

  async save(user: User): Promise<User> {
    const saved = await this.repo.save(user);
    return Object.assign(new User(), saved);
  }

  async findById(id: string): Promise<User | null> {
    const found = await this.repo.findOne({ where: { id } });
    return found ? Object.assign(new User(), found) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const found = await this.repo.findOne({ where: { email } });
    return found ? Object.assign(new User(), found) : null;
  }

  async findAll(): Promise<User[]> {
    const all = await this.repo.find();
    return all.map(u => Object.assign(new User(), u));
  }

  async update(id: string, data: Partial<User>): Promise<User | null> {
    await this.repo.update(id, data);
    const updated = await this.findById(id);
    return updated ? Object.assign(new User(), updated) : null;
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}