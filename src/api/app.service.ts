import { NestFactory } from '@nestjs/core';
import { config } from 'src/config';
import { AppModule } from './app.module';
import * as express from 'express';
import * as path from 'path';

export class Application {
  static async main(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
    app.listen(config.PORT || 3000);
  }
}
