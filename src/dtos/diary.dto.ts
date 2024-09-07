import { ApiProperty } from '@nestjs/swagger';

export class CreateDiaryDto {
  @ApiProperty({ description: 'Title of the diary entry' })
  title: string;

  @ApiProperty({ description: 'Description of the diary entry' })
  description: string;

  @ApiProperty({ description: 'Status of the diary entry' })
  status: string;

  @ApiProperty({ description: 'Date of the diary entry' })
  date: Date;

  @ApiProperty({ description: 'Start time of the diary entry' })
  start_time: string;

  @ApiProperty({ description: 'End time of the diary entry', required: false })
  end_time?: string;
}

export class DiaryDto {
    @ApiProperty({ description: 'ID of the diary entry' })
    id: number;
  
    @ApiProperty({ description: 'Title of the diary entry' })
    title: string;
  
    @ApiProperty({ description: 'Description of the diary entry' })
    description: string;
  
    @ApiProperty({ description: 'Status of the diary entry' })
    status: string;
  
    @ApiProperty({ description: 'Date of the diary entry' })
    date: Date;
  
    @ApiProperty({ description: 'Start time of the diary entry' })
    start_time: string;
  
    @ApiProperty({ description: 'End time of the diary entry', required: false })
    end_time?: string;
  }