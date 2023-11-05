import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.getOrThrow<string>("DATABASE_HOST"),
        port: configService.getOrThrow<number>("DATABASE_PORT"),
        username: configService.getOrThrow<string>("DATABASE_USER"),
        password: configService.getOrThrow<string>("DATABASE_PASS"),
        autoLoadEntities: true,
        synchronize: configService.getOrThrow<boolean>("DATABASE_SYNC"),
      }),
      // dataSource receives the configured DataSourceOptions
      // and returns a Promise<DataSource>.
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
  ],
})
export class DatabaseModule {}
