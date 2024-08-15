import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module'
import { AppController } from './app.controller';

@Module({
  imports: [TaskModule],
  controllers: [AppController],
  providers: [],
})

export class AppModule {}

