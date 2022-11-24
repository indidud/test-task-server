import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigEntity } from './config.entity';

@Injectable()
export class ConfigEntityService {
  constructor(
    @InjectRepository(ConfigEntity)
    private repository: Repository<ConfigEntity>,
  ) {}

  findAll(): Promise<ConfigEntity> {
    return this.repository.findOneBy({ id: 1 });
  }
}
