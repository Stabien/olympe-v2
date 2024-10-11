import { Module } from '@nestjs/common'
import { ExercisesService } from './exercises.service'
import { ExercisesController } from './exercises.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Exercise } from './entities/exercise.entity'
import { ProgramsModule } from 'src/programs/programs.module'

@Module({
  imports: [TypeOrmModule.forFeature([Exercise]), ProgramsModule],
  controllers: [ExercisesController],
  providers: [ExercisesService],
})
export class ExercisesModule {}
