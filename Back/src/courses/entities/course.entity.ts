import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";

@Schema()
export class Course {

    @Prop({required:true})
    title:string;

    @Prop({required:true})
    file:string;

    @Prop({required:true})
    description:string;

    @Prop({required:true})
    trainer:string;

    @Prop({required:true})
    nbetudiant:number;

    @Prop({required:true})
    duree:string;

    //lesm li fl categories module
    @Prop({type:SchemaTypes.ObjectId, ref:'categories'})
    category:Types.ObjectId;

    /////////////////////
    @Prop([{type:SchemaTypes.ObjectId, ref:'sections'}])
    sections:Types.ObjectId[];
    
}
export const courseSchema= SchemaFactory.createForClass(Course)
