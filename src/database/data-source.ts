import * as dotenv from "dotenv";
import * as dotenvExpand from "dotenv-expand";
import { DataSource } from "typeorm";

dotenvExpand.expand(dotenv.config());

export default new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  entities: ["dist/**/*.entity.js"],
  migrations: ["dist/database/migrations/*.js"],
  extra: {
    charset: "utf8mb4_unicode_ci",
  },
});
