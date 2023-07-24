import {Schema , Prop ,SchemaFactory} from "@nestjs/mongoose"
import * as argon2 from'argon2'
import { HydratedDocument } from "mongoose";
import { Admin } from "src/admin/entities/admin.entity";
import { Student } from "src/students/entities/student.entity";

export type UserDocument=HydratedDocument<User>
@Schema({discriminatorKey:'items'})
export class User {
    //heritage
    @Prop({required:true, type:String, enum:[Admin.name, Student.name]})
    items:string

    @Prop({required:true})
    fullName:string;

    @Prop({required:true , unique:true})
    userName:string;

    @Prop({required:true , unique:true})
    email:string;

    @Prop({required:true})
    password:string;

    @Prop({required:true})
    adress:string;

    @Prop({required:true})
    phone:number;

    ///refreshtoken
    @Prop()
    refreshToken:string;
    
}
export const userSchema = SchemaFactory.createForClass(User).pre('save',
async function() {
    this.password=await argon2.hash(this.password)
})
