import { Controller, Get, Post, HttpException, HttpStatus, UseGuards,Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { User } from '@prisma/client';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,private readonly userService:UserService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req):Promise<User|unknown> {
    try {
      const profile = await this.userService.findOne(+req.user.id);
       if (profile instanceof Error) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
       }
      return profile
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
