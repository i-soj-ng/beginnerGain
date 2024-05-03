import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from '../services/user.serivce.js';
import { CreateUserDto, LoginUserDto } from '../dtos/user.dto.js';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  async getUserById(@Param('id') userId: string) {
    return await this.userService.getUserById(userId);
  }
  @Post('register')
  @UsePipes(new ValidationPipe({ transform: true }))
  async register(@Body() userDto: CreateUserDto) {
    return await this.userService.createUser({
      email: userDto.email,
      password: userDto.password,
      name: userDto.name,
    });
  }

  @Post('login')
  @UsePipes(new ValidationPipe({ transform: true }))
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.loginUser(loginUserDto);
  }
}
