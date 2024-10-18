import { IsDateString, IsNotEmpty, IsString } from 'class-validator'
import { CreateSessionExerciseDto } from './create-session-exercise.dto'
import { User } from 'src/users/entities/user.entity'
import { Program } from 'src/programs/entities/program.entity'

export class CreateSessionDto {
  @IsDateString()
  date: Date

  @IsString()
  tag: string

  @IsString()
  user: User

  @IsString()
  program: Program

  @IsNotEmpty()
  exercises: CreateSessionExerciseDto[]
}
