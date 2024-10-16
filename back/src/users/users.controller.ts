import { Controller, Post, Body, Patch, Param, Get } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    return await this.usersService.findOneBy({ id })
  }

  @Get(':id/exercises')
  async findUserExercises(@Param('id') id: string) {
    return await this.usersService.findUserExercises(id)
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(id, updateUserDto)
  }
}
