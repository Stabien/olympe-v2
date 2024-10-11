import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ExercisesService } from './exercises.service'
import { CreateExerciseDto } from './dto/create-exercise.dto'
import { UpdateExerciseDto } from './dto/update-exercise.dto'
import { ProgramsService } from 'src/programs/programs.service'

@Controller('exercises')
export class ExercisesController {
  constructor(
    private readonly exercisesService: ExercisesService,
    private readonly programsService: ProgramsService,
  ) {}

  @Post()
  async create(@Body() createExerciseDto: CreateExerciseDto) {
    return await this.exercisesService.create(createExerciseDto)
  }

  @Post('/programs/:programId')
  async createAndAssignToProgram(
    @Param('programId') programId: string,
    @Body() createExerciseDto: CreateExerciseDto,
  ) {
    const exercise = await this.exercisesService.create(createExerciseDto)
    await this.programsService.addExercise(programId, exercise.id)

    return exercise
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ) {
    return await this.exercisesService.update(id, updateExerciseDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exercisesService.remove(+id)
  }
}
