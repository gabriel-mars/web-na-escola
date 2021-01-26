import { User } from "./user.model";

export interface Responsavel {
    id?: number
    usuario: User
    foto?: string
}