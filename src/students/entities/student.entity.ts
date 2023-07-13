import { Schema,SchemaFactory,Prop } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type StudentDocument=HydratedDocument<Student>
@Schema()
export class Student {
    items:string;
}
export const studentSchema = SchemaFactory.createForClass(Student)
