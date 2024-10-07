import { DataSource } from 'typeorm'
import { typeOrmConfig } from './typeorm.config'
import { config } from 'dotenv'

config()

export default new DataSource(typeOrmConfig())
