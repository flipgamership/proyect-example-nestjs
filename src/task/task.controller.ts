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
import { CreateTaskDto, TaskDto } from 'src/dtos/task.dto';
import { ApiTags, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Tasks') // Tag for this controller
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiBody({ type: CreateTaskDto  })
  @ApiResponse({ status: 201, description: 'Task created successfully', type: TaskDto })
  @ApiResponse({ status: 404, description: 'Task does not exist' })
  async createTask(@Body() data: Task) {
    let object = data
    console.log(data);
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
