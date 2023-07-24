import { Schema,SchemaFactory,Prop } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";

@Schema()
export class Category {
    @Prop({required:true,unique:true})
    name:string;
    @Prop({required:true})
    file:string;
    @Prop({required:true})
    description:string;

    @Prop([{type:SchemaTypes.ObjectId, ref:'courses'}])
    courses:Types.ObjectId[];
}
export const categorieSchema = SchemaFactory.createForClass(Category)

