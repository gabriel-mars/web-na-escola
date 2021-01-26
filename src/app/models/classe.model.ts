import { STATUS_CLASSE } from "../enums/STATUS_CLASSE";
import { TURNO_CLASSE } from "../enums/TURNO_CLASSE";
import { Escola } from "./escola.model";
import { Professor } from "./professor.model";

export interface Classe {
    id?: number
    nome: string
    anoClasse: string
    anoLetivo: string
    descricao?: string
    escola: Escola
    turno: TURNO_CLASSE
    status: STATUS_CLASSE
    professor: Professor
}