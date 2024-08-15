import { Module } from "@nestjs/common";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";
import { prismaModule } from "../prisma/prisma.module";

@Module({
    controllers: [TaskController],
    providers: [TaskService],
    imports: [prismaModule],
})

export class TaskModule {
}