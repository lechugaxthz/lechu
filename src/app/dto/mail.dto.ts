import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class MailDto {
    @IsString()
    @IsNotEmpty()
    userName: string = ''

    @IsString()
    @IsNotEmpty()
    userLastName: string = ''

    @IsString()
    @IsEmail(undefined, { message: 'Invalid email format' })
    @IsNotEmpty()
    userMail: string = ''

    @IsString()
    @IsOptional()
    userContactNumber?: string = ''

    @IsString({message: 'Matters is required'})
    @IsNotEmpty()
    mailMatters: string = ''

    @IsString({message: 'Description is required'})
    @IsNotEmpty()
    mailContent: string = ''
}