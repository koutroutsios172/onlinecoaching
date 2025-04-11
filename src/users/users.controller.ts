import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  users = {
    1: { id: 1, name: 'George' },
    2: { id: 2, name: 'John' }
  };

  @Get()
  getUsers() {
    return Object.values(this.users);
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.users[id] || { message: 'User not found' };
  }

  @Post('login')
  loginUser(@Body() body: { email: string; password: string }) {
    console.log('Received email:', body.email);
    console.log('Received password:', body.password);
    return { message: 'Login details received' };
  }
}

