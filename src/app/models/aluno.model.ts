import { SITUACAO_ALUNO } from "../enums/SITUACAO_ALUNO";
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
    situacao?: SITUACAO_ALUNO
    responsavel?: Responsavel
    escola: Escola,
    justificativa: string
}