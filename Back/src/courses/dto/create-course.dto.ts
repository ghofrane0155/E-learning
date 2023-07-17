import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCourseDto {
    
    @IsString()
    @IsNotEmpty()
    title : string;

    @IsString()
    @IsNotEmpty()
    file : string;
    
    @IsString()
    @IsNotEmpty()
    description : string; 

    @IsString()
    @IsNotEmpty()
    trainer : string; 
    
    @IsNumber()
    @IsNotEmpty()
    nbetudiant : number; 
    
    @IsString()
    @IsNotEmpty()
    duree : string;

    @IsString()
    @IsNotEmpty()
    category:string
}
