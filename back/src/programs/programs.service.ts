import { Injectable } from '@nestjs/common'
import { CreateProgramDto } from './dto/create-program.dto'
import { UpdateProgramDto } from './dto/update-program.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Program } from './entities/program.entity'
import { Repository } from 'typeorm'
import { Exercise } from 'src/exercises/entities/exercise.entity'

@Injectable()
export class ProgramsService {
  constructor(
    @InjectRepository(Program)
    private programRepository: Repository<Program>,

    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
  ) {}

  async create(createProgramDto: CreateProgramDto) {
    const program = this.programRepository.create(createProgramDto)
    return await this.programRepository.save(program)
  }

  async addExercise(programId: string, exerciseId: string) {
    const program = await this.programRepository.findOne({
      where: { id: programId },
      relations: { exercises: true },
    })

    const exercise = await this.exerciseRepository.findOneBy({ id: exerciseId })
    program.exercises = [...program.exercises, exercise]

    return await this.programRepository.save(program)
  }

  findAll() {
    return `This action returns all programs`
  }

  findOne(id: number) {
    return `This action returns a #${id} program`
  }

  async update(id: string, updateProgramDto: UpdateProgramDto) {
    const program = this.programRepository.findBy({ id })
    const updatedProgram = this.programRepository.create({
      ...program,
      ...updateProgramDto,
    })

    return await this.programRepository.save(updatedProgram)
  }

  remove(id: number) {
    return `This action removes a #${id} program`
  }
}
