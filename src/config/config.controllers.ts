import { Controller, Get, Post, Body } from '@nestjs/common';
import { ConfigEntityService } from './config.service';
import { ConfigEntity } from './config.entity';
import * as path from 'path';
import { ConfigEntityDto } from './dto/config.dto';
import { runBashScript } from '../utils';

@Controller()
export class ConfigEntityController {
  constructor(private readonly configEntityService: ConfigEntityService) {}

  @Get('config')
  getConfig(): Promise<ConfigEntity> {
    return this.configEntityService.findAll();
  }

  @Post('run')
  async create(@Body() body: ConfigEntityDto): Promise<string> {
    const pathToFile = path.join(__dirname, '..', '..', 'start.sh');
    const result = await runBashScript(
      pathToFile,
      body.input_num,
      body.input_text,
    );
    return result;
  }
}
