import { IsEmail, IsString, Length } from 'class-validator'

export class CreateUserDto {
  @IsEmail()
  email: string

  @IsString()
  @Length(8)
  password: string

  @IsString()
  @Length(2)
  firstname: string

  @IsString()
  @Length(2)
  lastname: string
}
