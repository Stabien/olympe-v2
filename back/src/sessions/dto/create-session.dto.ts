import { IsDateString, IsNotEmpty, IsString } from 'class-validator'
import { CreateSessionExerciseDto } from './create-session-exercise.dto'

export class CreateSessionDto {
  @IsDateString()
  date: Date

  @IsString()
  tag: string

  @IsString()
  user: string

  @IsNotEmpty()
  exercises: CreateSessionExerciseDto[]
}
