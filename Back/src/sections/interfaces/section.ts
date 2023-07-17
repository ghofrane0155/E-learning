import { Document } from "mongoose"

export interface ISection extends Document{
    readonly name:string;
    readonly description:string; 
    readonly file:string;
    
    readonly course:string;/////
}
