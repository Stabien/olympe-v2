import { Module } from '@nestjs/common'
import { ProgramsService } from './programs.service'
import { ProgramsController } from './programs.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Program } from './entities/program.entity'
import { Exercise } from 'src/exercises/entities/exercise.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Program, Exercise])],
  controllers: [ProgramsController],
  providers: [ProgramsService],
<<<<<<< HEAD
  exports: [ProgramsService],
=======
>>>>>>> 6f84daf5bd4fed94450692ef0911ce08fc4b2f4f
})
export class ProgramsModule {}
