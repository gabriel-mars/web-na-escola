import { Escola } from "./escola.model";
import { User } from "./user.model";

export interface Professor {
    id?: number
    usuario: User
    codigoGeradoEscola: string
    escola: Escola
    senhaGerada?: string
}