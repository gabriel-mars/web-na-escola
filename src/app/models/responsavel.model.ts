import { User } from "./user.model";

export interface Responsavel {
    id?: number
    user: User
    foto?: string
}