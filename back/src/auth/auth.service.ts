import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<{ token: string }> {
    const user = await this.usersService.findOneBy({ email });

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    return {
      token: await this.jwtService.signAsync({
        id: user.id,
        email: user.email,
      }),
    };
  }
}
