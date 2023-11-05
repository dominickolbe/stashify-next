import { createConnection, Connection } from "typeorm";
import { ConfigService } from "@nestjs/config";

const configService = new ConfigService();

export const connection: Promise<Connection> = createConnection({
  type: "postgres",
  url: configService.get<string>("DATABASE_URL"),
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  synchronize: true,
});
