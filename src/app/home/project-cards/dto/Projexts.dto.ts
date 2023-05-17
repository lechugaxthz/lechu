import { IsString, IsNumber, IsNotEmpty, IsObject, IsOptional } from 'class-validator'


export class MyProjectsDto {

    @IsNumber()
    @IsNotEmpty()
    id: number = 0

    @IsString()
    theme: string = ''

    @IsString()
    @IsNotEmpty()
    name: string = ''

    @IsNotEmpty()
    @IsString()
    summary: string = ''

    @IsString()
    @IsNotEmpty()
    description: string = ''

    @IsNotEmpty()
    img: string = ''

    @IsString()
    carriedOut: string = 'In Progres'

    @IsOptional()
    link?: string | null = null;




}