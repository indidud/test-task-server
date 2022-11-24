import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { ConfigEntity } from './config/config.entity';
import { ConfigEntityController } from './config/config.controllers';
import { ConfigEntityModule } from './config/config.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get('DB_HOST'),
          port: +configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: [ConfigEntity],
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
    ConfigEntityModule,
  ],
  controllers: [AppController, ConfigEntityController],
  providers: [],
})
export class AppModule {}
