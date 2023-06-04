import { Body, Controller, Get, Post, Query, Res, UseGuards } from '@nestjs/common';
import { VerifyUserGuard } from '../guards/verified_user.guard';
import { LoginUserDTO } from './dto/login-user.dto';
import { RegisterUserDTO } from './dto/register-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
   constructor(private readonly userServices:UsersService){}
   
   @Post('register-user')
   registerUser(@Body() userData : RegisterUserDTO){
       return this.userServices.registerUser(userData);
   }

   @Post('login')
   loginUser(@Body() userData : LoginUserDTO, @Res({ passthrough: true }) res){
       return this.userServices.loginUser(userData,res);
   }
}
