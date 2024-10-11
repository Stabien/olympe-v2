import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateSessionExerciseDto {
  @IsNumber()
  weight: number

  @IsNotEmpty()
  sets: number[]

  @IsString()
  exercise: string
}
