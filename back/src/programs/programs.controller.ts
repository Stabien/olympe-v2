import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { ProgramsService } from './programs.service'
import { CreateProgramDto } from './dto/create-program.dto'
import { UpdateProgramDto } from './dto/update-program.dto'

@Controller('programs')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) {}

  @Post()
  async create(@Body() createProgramDto: CreateProgramDto) {
    return await this.programsService.create(createProgramDto)
  }

  @Post(':programId/exercises/:exerciseId')
  async addExercise(
    @Param('programId') programId: string,
    @Param('exerciseId') exerciseId: string,
  ) {
    return await this.programsService.addExercise(programId, exerciseId)
  }

  @Get()
  findAll() {
    return this.programsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programsService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgramDto: UpdateProgramDto) {
    return this.programsService.update(id, updateProgramDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programsService.remove(+id)
  }
}
