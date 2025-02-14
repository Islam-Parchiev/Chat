import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from "argon2";
import { User } from '@prisma/client';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService:JwtService,
    private readonly prisma:PrismaService
    ) {}
  async validateUser(email:string, password: string){
    const user = await this.prisma.user.findFirstOrThrow({ where: {email:email}});

    const passwordIsMatch = await argon2.verify(user.password,password)

    if (user && passwordIsMatch) {
     return user
    }

    throw new UnauthorizedException('User or password are incorrect!')

  }



  async login(user: User) {
    const {id,email,name} = user;
    return {
      id,
      email,
      name,
      token:this.jwtService.sign({id:user.id,email:user.email,name:user.name})
    }
  }
}
