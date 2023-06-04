import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginUserDTO {

    @IsString()
    @IsNotEmpty()
    user_id: string

    @IsString()
    @IsNotEmpty()
    password: string
    
}