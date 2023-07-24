import { Document } from "mongoose"

export interface ICourse extends Document{
    readonly title:string;
    readonly file:string;
    readonly description:string;
    readonly trainer:string;
    readonly nbetudiant:number;
    readonly duree:string;

    readonly category:string;/////
}
