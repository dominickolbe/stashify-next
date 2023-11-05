import * as dotenv from "dotenv";
dotenv.config();

import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  entities: ["dist/**/*.entity.js"],
  migrations: ["dist/migration/**/*.js"],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
