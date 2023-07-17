import { IsNotEmpty, IsString } from "class-validator";

export class CreateQuizDto {

    @IsString()
    @IsNotEmpty()
    question : string;

    @IsString()
    @IsNotEmpty()
    rep1 : string;

    @IsString()
    @IsNotEmpty()
    rep2 : string;

    @IsString()
    @IsNotEmpty()
    rep3 : string;

    @IsString()
    @IsNotEmpty()
    answer : string;
}
