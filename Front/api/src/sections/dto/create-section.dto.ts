import { IsNotEmpty, IsString } from "class-validator";

export class CreateSectionDto {

    @IsString()
    @IsNotEmpty()
    name : string;

    @IsString()
    @IsNotEmpty()
    description : string;

    @IsString()
    @IsNotEmpty()
    file : string;

    //one to many
    @IsString()
    @IsNotEmpty()
    course:string
}
