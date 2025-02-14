import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';
import * as argon2 from 'argon2'
import { User } from '@prisma/client';
@Injectable()
export class UserService {
  constructor(
    private readonly jwtService:JwtService,
    private readonly prisma:PrismaService
  ){}
  async create(createUserDto: CreateUserDto) {
    const existUser = await this.prisma.user.findFirst({
      where:{
        email:createUserDto.email
      }
    })
    if(existUser!==null) {
      throw new BadRequestException('This user already exist!!!!!')
    }

    const user = await this.prisma.user.create({
      data:{
      name:createUserDto.name,
      email:createUserDto.email,
      password:await argon2.hash(createUserDto.password),
      updatedAt:new Date()
      }
    })

    const token = this.jwtService.sign({ email:createUserDto.email })

    return {user,token};
  }
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({
      where:{id:id}
    })
    if(!user) throw new NotFoundException('User not found')
  
    return await this.prisma.user.update({where:{id},data:{...updateUserDto,updatedAt:new Date()}})
  }
  async findAll() {
    const user = await this.prisma.user.findMany();
    if(!user) throw new NotFoundException('User not found')
    return user
  }
  async searchUsers(query:string) {
    
       return await this.prisma.user.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } }, // Поиск по имени (нечувствительный к регистру)
          { email: { contains: query, mode: 'insensitive' } }, // Поиск по email (нечувствительный к регистру)
        ],
      },
    });
  
  }
  async findOne(id:number): Promise<User|string> {
    const user = await this.prisma.user.findUnique({where:{id:id}});
    if(!user) throw new NotFoundException('User not found')
    return user;
  }

  async remove(id: number): Promise<User|string> {
    if(!await this.prisma.user.findUnique({where:{id:id}})) throw new NotFoundException('User not found')
    const user = await this.prisma.user.delete({
      where:{
        id:id
      }
    })
    return user;
  }
  
}
