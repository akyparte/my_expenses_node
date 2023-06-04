import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterUserDTO {

    @IsString()
    @IsNotEmpty()
    user_id: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsEmail()
    email: string
    
}
