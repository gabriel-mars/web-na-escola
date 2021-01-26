import { TIPO_REQUISICAO } from "../enums/TIPO_REQUISICAO";
import { Aluno } from "./aluno.model";
import { Escola } from "./escola.model";
import { Responsavel } from "./responsavel.model";

export interface Requisicao {
    id?: number
    escola: Escola
    responsavel: Responsavel
    observacao: string
    aluno: Aluno
    tipoRequisicao: TIPO_REQUISICAO
}