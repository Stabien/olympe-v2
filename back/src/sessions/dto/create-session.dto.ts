import { IsDateString, IsNotEmpty, IsString } from 'class-validator'
import { CreateSessionExerciseDto } from './create-session-exercise.dto'
import { User } from 'src/users/entities/user.entity'

export class CreateSessionDto {
  @IsDateString()
  date: Date

  @IsString()
  tag: string

  @IsString()
  user: User

  @IsNotEmpty()
  exercises: CreateSessionExerciseDto[]
}
