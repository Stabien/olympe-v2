import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeOrmConfig } from '../database/config/typeorm.config'
import { UsersModule } from './users/users.module'
import { MealsModule } from './meals/meals.module'
import { SessionsModule } from './sessions/sessions.module'
import { ExercisesModule } from './exercises/exercises.module'
import { FoodstuffsModule } from './foodstuffs/foodstuffs.module'
import { BodyweightModule } from './bodyweight/bodyweight.module'
import { ProgramsModule } from './programs/programs.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig()),
    UsersModule,
    MealsModule,
    SessionsModule,
    ExercisesModule,
    FoodstuffsModule,
    BodyweightModule,
    ProgramsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
