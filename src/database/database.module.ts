import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.getOrThrow<string>("DATABASE_HOST"),
        port: configService.getOrThrow<number>("DATABASE_PORT"),
        database: configService.getOrThrow<string>("DATABASE_NAME"),
        username: configService.getOrThrow<string>("DATABASE_USER"),
        password: configService.getOrThrow<string>("DATABASE_PASSWORD"),
        autoLoadEntities: true,
        synchronize: configService.getOrThrow<boolean>("DATABASE_SYNC"),
        }),
      inject: [ConfigService],
  ],
})
export class DatabaseModule {}
