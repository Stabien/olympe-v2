import { Injectable, NotFoundException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from 'src/users/users.service'
import { compare } from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<{ token: string }> {
    const user = await this.usersService.findOneBy({ email })
    const isPasswordMatching = await compare(password, user?.password ?? '')

    if (!isPasswordMatching) {
      throw new NotFoundException()
    }

    return {
      token: await this.jwtService.signAsync({
        id: user.id,
        email: user.email,
      }),
    }
  }
}
