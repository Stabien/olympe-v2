import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { FindOptionsWhere, Repository } from 'typeorm'
import { Exercise } from 'src/exercises/entities/exercise.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto)
    return await this.userRepository.save(user)
  }

  async findOneBy(findOptionsWhere: FindOptionsWhere<User>): Promise<User> {
    return this.userRepository.findOneBy(findOptionsWhere)
  }

  async findUserExercises(userId: string): Promise<Exercise[]> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: { exercises: true },
    })

    return user.exercises
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = this.userRepository.findOneBy({ id })
    const updatedUser = this.userRepository.create({
      ...user,
      ...updateUserDto,
    })
    return await this.userRepository.save(updatedUser)
  }
}
