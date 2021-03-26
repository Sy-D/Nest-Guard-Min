import { ObjectId } from "mongoose";

export class CountryDto {
    _id: ObjectId;
    name: string;
    code: string;
}