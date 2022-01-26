import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppEntity } from 'src/infrastructure/entity';
import { App } from 'src/infrastructure/interfaces/app.interface';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(AppEntity)
    private readonly repository: Repository<App>
  ) { }

  async create(cat: App) {
    return await this.repository.create(cat);
  }

  async findAll(): Promise<AppEntity[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<AppEntity> {
    return await this.repository.findOne(id);
  }
}