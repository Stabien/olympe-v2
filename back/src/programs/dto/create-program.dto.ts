import { IsString } from 'class-validator'
import { User } from 'src/users/entities/user.entity'

export class CreateProgramDto {
  @IsString()
  name: string

  @IsString()
  user: User
}
