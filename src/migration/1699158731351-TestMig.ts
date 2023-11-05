import { MigrationInterface, QueryRunner } from "typeorm";

export class TestMig1699158731351 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {}

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
