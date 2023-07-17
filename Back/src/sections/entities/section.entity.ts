import { Schema,SchemaFactory,Prop } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";

@Schema()
export class Section {

    @Prop({required:true})
    name:string;

    @Prop({required:true})
    file:string;
    
    @Prop({required:true})
    description:string; 
    
    ////one to many
    @Prop({type:SchemaTypes.ObjectId, ref:'courses'})
    course:Types.ObjectId;
}
export const sectionSchema = SchemaFactory.createForClass(Section)

