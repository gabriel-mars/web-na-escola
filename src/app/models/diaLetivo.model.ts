import { Escola } from "./escola.model";

export interface DiaLetivo {
    id?: number
    escola: Escola
    diaLetivo: string
}