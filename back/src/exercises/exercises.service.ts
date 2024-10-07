import { Injectable } from '@nestjs/common'
import { CreateExerciseDto } from './dto/create-exercise.dto'
import { UpdateExerciseDto } from './dto/update-exercise.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Exercise } from './entities/exercise.entity'
import { Repository } from 'typeorm'

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
  ) {}

  async create(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    const exercise = this.exerciseRepository.create(createExerciseDto)
    return await this.exerciseRepository.save(exercise)
  }

  async update(
    id: string,
    updateExerciseDto: UpdateExerciseDto,
  ): Promise<Exercise> {
    const exercise = await this.exerciseRepository.findOne({ where: { id } })
    const updatedExercise = this.exerciseRepository.create({
      ...exercise,
      ...updateExerciseDto,
    })

    return await this.exerciseRepository.save(updatedExercise)
  }

  remove(id: number) {
    return `This action removes a #${id} exercise`
  }
}
