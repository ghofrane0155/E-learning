import { Document } from "mongoose"

export interface IStudent extends Document{
    readonly items:string;
}