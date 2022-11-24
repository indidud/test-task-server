import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigEntity } from './config.entity';
import { ConfigEntityService } from './config.service';
import { ConfigEntityController } from './config.controllers';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigEntity])],
  providers: [ConfigEntityService],
  controllers: [ConfigEntityController],
  exports: [ConfigEntityService],
})
export class ConfigEntityModule {}
