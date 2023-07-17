import { Document } from "mongoose"

export interface ICategorie extends Document{
    readonly name:string;
    readonly file:string;
    readonly description:string;
}
