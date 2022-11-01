import {Status} from "../Enums";

export interface User {
    id: number;
    fullName: string;
    username: string;
    phone: number
    location: string;
    status: Status;
}