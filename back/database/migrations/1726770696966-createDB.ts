import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateDB1726770696966 implements MigrationInterface {
  name = 'CreateDB1726770696966'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "bodyweight" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL, "value" integer NOT NULL, "user_id" uuid, CONSTRAINT "PK_0969a6d64b2dd589c336ca98199" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "session" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL, "tag" character varying NOT NULL, "user_id" uuid, CONSTRAINT "PK_f55da76ac1c3ac420f444d2ff11" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "session_exercise" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL, "weight" integer NOT NULL, "sets" integer array NOT NULL, "session_id" uuid, "exercise_id" uuid, CONSTRAINT "PK_4aa1057d024c2a2de9fa1845e6d" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "exercise" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "user_id" uuid, CONSTRAINT "PK_a0f107e3a2ef2742c1e91d97c14" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "foodstuff" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "kcal" integer NOT NULL, "lipids" integer NOT NULL, "carbohydrates" integer NOT NULL, "sugar" integer NOT NULL, "proteins" integer NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_422c03e279c08af1fcd08638725" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "meal_foodstuff" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "meal_id" uuid, "foodstuff_id" uuid, CONSTRAINT "PK_a393f72a7d2f5b00d195aa8e0aa" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "meal" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "user_id" uuid, CONSTRAINT "PK_ada510a5aba19e6bb500f8f7817" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "program" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "user_id" uuid, CONSTRAINT "PK_3bade5945afbafefdd26a3a29fb" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "role" "public"."user_role_enum" NOT NULL DEFAULT 'customer', CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "program_exercise" ("program_id" uuid NOT NULL, "exercise_id" uuid NOT NULL, CONSTRAINT "PK_0a77ecbe68432177ffafa567bdf" PRIMARY KEY ("program_id", "exercise_id"))`,
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_bb6ee2b911654532ef60a313dc" ON "program_exercise" ("program_id") `,
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_08ba497b3f62992efe39920bfb" ON "program_exercise" ("exercise_id") `,
    )
    await queryRunner.query(
      `ALTER TABLE "bodyweight" ADD CONSTRAINT "FK_1481f7b76a098b4f0bea1b6de3c" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "session" ADD CONSTRAINT "FK_30e98e8746699fb9af235410aff" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "session_exercise" ADD CONSTRAINT "FK_b3622df522c83e41ddab76246e3" FOREIGN KEY ("session_id") REFERENCES "session"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "session_exercise" ADD CONSTRAINT "FK_94f5fe9ba5bf8e35513a1e3bdf1" FOREIGN KEY ("exercise_id") REFERENCES "exercise"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "exercise" ADD CONSTRAINT "FK_486d56516b64030a655861e1aa9" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "meal_foodstuff" ADD CONSTRAINT "FK_5126755fa6642d3e18dbcc3ffbe" FOREIGN KEY ("meal_id") REFERENCES "meal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "meal_foodstuff" ADD CONSTRAINT "FK_4aa1c693ebde309cd7a8abf7786" FOREIGN KEY ("foodstuff_id") REFERENCES "foodstuff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "meal" ADD CONSTRAINT "FK_f08c67a524f8f76ede6ad352d44" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "program" ADD CONSTRAINT "FK_0384618c2f425043d7984807e63" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "program_exercise" ADD CONSTRAINT "FK_bb6ee2b911654532ef60a313dca" FOREIGN KEY ("program_id") REFERENCES "program"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "program_exercise" ADD CONSTRAINT "FK_08ba497b3f62992efe39920bfb4" FOREIGN KEY ("exercise_id") REFERENCES "exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "program_exercise" DROP CONSTRAINT "FK_08ba497b3f62992efe39920bfb4"`,
    )
    await queryRunner.query(
      `ALTER TABLE "program_exercise" DROP CONSTRAINT "FK_bb6ee2b911654532ef60a313dca"`,
    )
    await queryRunner.query(
      `ALTER TABLE "program" DROP CONSTRAINT "FK_0384618c2f425043d7984807e63"`,
    )
    await queryRunner.query(
      `ALTER TABLE "meal" DROP CONSTRAINT "FK_f08c67a524f8f76ede6ad352d44"`,
    )
    await queryRunner.query(
      `ALTER TABLE "meal_foodstuff" DROP CONSTRAINT "FK_4aa1c693ebde309cd7a8abf7786"`,
    )
    await queryRunner.query(
      `ALTER TABLE "meal_foodstuff" DROP CONSTRAINT "FK_5126755fa6642d3e18dbcc3ffbe"`,
    )
    await queryRunner.query(
      `ALTER TABLE "exercise" DROP CONSTRAINT "FK_486d56516b64030a655861e1aa9"`,
    )
    await queryRunner.query(
      `ALTER TABLE "session_exercise" DROP CONSTRAINT "FK_94f5fe9ba5bf8e35513a1e3bdf1"`,
    )
    await queryRunner.query(
      `ALTER TABLE "session_exercise" DROP CONSTRAINT "FK_b3622df522c83e41ddab76246e3"`,
    )
    await queryRunner.query(
      `ALTER TABLE "session" DROP CONSTRAINT "FK_30e98e8746699fb9af235410aff"`,
    )
    await queryRunner.query(
      `ALTER TABLE "bodyweight" DROP CONSTRAINT "FK_1481f7b76a098b4f0bea1b6de3c"`,
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_08ba497b3f62992efe39920bfb"`,
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_bb6ee2b911654532ef60a313dc"`,
    )
    await queryRunner.query(`DROP TABLE "program_exercise"`)
    await queryRunner.query(`DROP TABLE "user"`)
    await queryRunner.query(`DROP TABLE "program"`)
    await queryRunner.query(`DROP TABLE "meal"`)
    await queryRunner.query(`DROP TABLE "meal_foodstuff"`)
    await queryRunner.query(`DROP TABLE "foodstuff"`)
    await queryRunner.query(`DROP TABLE "exercise"`)
    await queryRunner.query(`DROP TABLE "session_exercise"`)
    await queryRunner.query(`DROP TABLE "session"`)
    await queryRunner.query(`DROP TABLE "bodyweight"`)
  }
}
