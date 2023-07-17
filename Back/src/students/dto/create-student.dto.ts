import { IsNotEmpty, IsString } from "class-validator";

export class CreateStudentDto {
    
    @IsString()
    @IsNotEmpty()
    items : string;
}
