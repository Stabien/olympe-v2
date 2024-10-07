import { DataSourceOptions } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

export const typeOrmConfig = (): DataSourceOptions => ({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  entities: [__dirname + '/../../src/**/*.entity.{ts,js}'],
  migrations: ['src/db/migrations/*{.ts,.js}'],
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
})
