import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Quiz {

    @Prop({required:true})
    question:string;

    @Prop({required:true})
    rep1:string;

    @Prop({required:true})
    rep2:string;

    @Prop({required:true})
    rep3:string;

    @Prop({required:true})
    answer:string;
}
export const quizSchema= SchemaFactory.createForClass(Quiz)
