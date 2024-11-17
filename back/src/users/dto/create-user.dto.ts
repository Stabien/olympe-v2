import { IsEmail, IsString, Length } from 'class-validator'
import { IsUnique } from 'src/shared/decorators/unique.decorator'

export class CreateUserDto {
  @IsEmail()
  @IsUnique({ tableName: 'user', column: 'email' })
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
