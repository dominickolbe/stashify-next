import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ScheduleModule } from "@nestjs/schedule";
import { DataSource } from "typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { ItemsModule } from "./items/items.module";
import { OrdersModule } from "./orders/orders.module";
import { TaskService } from "./task/task.service";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    DatabaseModule,
    OrdersModule,
    ItemsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, TaskService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
