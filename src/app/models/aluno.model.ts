import { JUSTIFICATIVA_ALUNO } from "../enums/JUSTIFICATIVA_ALUNO";
import { Escola } from "./escola.model";
import { Responsavel } from "./responsavel.model";

export interface Aluno {
    id?: number
    dataNascimento: Date
    matricula: string
    dataMatricula: Date
    codigoGeradoEscola: string
    nomeMae: string
    nomePai?: string
    justificativa?: JUSTIFICATIVA_ALUNO
    responsavel?: Responsavel
    escola: Escola,
}