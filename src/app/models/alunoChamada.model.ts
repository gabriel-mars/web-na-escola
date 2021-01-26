import { STATUS_CHAMADA } from "../enums/STATUS_CHAMADA";
import { Aluno } from "./aluno.model";
import { Chamada } from "./chamada.model";

export interface AlunoChamada {
    id?: number
    aluno: Aluno
    chamada: Chamada
    status: STATUS_CHAMADA
    falta: number
}