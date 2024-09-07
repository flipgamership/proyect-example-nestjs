import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ description: 'Title of the task' })
  title: string;

  @ApiProperty({ description: 'Description of the task', required: false })
  description?: string;

  @ApiProperty({ description: 'Status of the task', required: false })
  status?: string;

  @ApiProperty({ description: 'Date of the task', required: false })
  date?: Date;
}

export class TaskDto {
  @ApiProperty({ description: 'ID of the task' })
  id: number;

  @ApiProperty({ description: 'Title of the task' })
  title: string;

  @ApiProperty({ description: 'Description of the task', required: false })
  description?: string;

  @ApiProperty({ description: 'Status of the task', required: false })
  status?: string;

  @ApiProperty({ description: 'Date of the task', required: false })
  date?: Date;
}
