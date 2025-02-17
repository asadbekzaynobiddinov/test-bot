import { Module } from '@nestjs/common';
import { ScenesService } from './scenes.service';

@Module({
  providers: [ScenesService],
})
export class ScenesModule {}
