import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { LoginUserDTO } from './dto/login-user.dto';
import { RegisterUserDTO } from './dto/register-user.dto';
import { JWTUtility } from './services/jwt-utility';
import moment from 'moment';


@Injectable()
export class UsersService {

   constructor(@InjectRepository(User) private userRepository: Repository<User>, private jwtUtility: JWTUtility) { }

   async registerUser(userData: RegisterUserDTO) {
      try {
         let user = await this.userRepository.findBy({ user_id: userData.user_id });
         if (user.length === 0) {
            let newUser = await this.userRepository.create({
               user_id: userData.user_id,
               email: userData.email,
               password: userData.password,
               created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
            });

            await this.userRepository.save(newUser);
            return {
               response: "USERCREATED"
            }

         } else {
            return {
               response: "USERALREADYEXISTS"
            }
         }
      } catch (error) {
         console.log(error);
         throw new HttpException('user is not registered', HttpStatus.INTERNAL_SERVER_ERROR);
      }
   }

   async loginUser(userData: LoginUserDTO, res: Response) {
      try {
         console.log(userData)
         let user = await this.userRepository.findBy({ user_id: userData.user_id });
         if (user.length > 0) {
            let token = this.jwtUtility.createToken(userData.user_id);
            return {
               response: "LOGGEDIN",
               auth: token,
            }
         } else {
            return {
               response: "USERNOTEXIST"
            }
         }
      } catch (error) {
         console.log(error)
         throw new HttpException('internal error try again', HttpStatus.INTERNAL_SERVER_ERROR);
      }
   }
}

