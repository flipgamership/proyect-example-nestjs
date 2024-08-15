import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';


@Controller()
export class AppController {
  @Get()
  getBaseRoute(@Res() res: Response) {
    return res.status(200).send('Hello World!');
  }
}
