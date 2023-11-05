import * as dotenv from "dotenv";
dotenv.config();

module.exports = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  entities: ["src/**/*.entity.ts"],
  migrations: ["src/migration/**/*.ts"],
  cli: {
    migrationsDir: "src/migration",
  },
};
