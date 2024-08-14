import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from '@prisma/client';
import { throwError } from 'rxjs';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Post()
  async createTask(@Body() data: Task) {
    const taskfound = await this.taskService.createTask(data);
    if (!taskfound) throw new NotFoundException('task does not exist')
    return taskfound;
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    return this.taskService.getTasksById(Number(id));
  }

  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() data: Task) {
    try {
        return this.taskService.updateTask(Number(id), data);
    } catch (error) {
        throw new NotFoundException('task does not exist')
    }
  }

  @Delete(':id')
  async DeleteTask(@Param('id') id: string) {
    try {
        return await this.taskService.deleteTask(Number(id));
    } catch (error) {
        throw new NotFoundException('task does not exist')
    }
  }
}
