import { ObjectId } from "mongoose";

export class LanguageDto {
    _id: ObjectId;
    appId: ObjectId;
    name: string;
    shortname: string;
    isDefault: boolean;
}