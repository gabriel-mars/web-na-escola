import { TIPO_AVALIACAO } from "../enums/TIPO_AVALIACAO";
import { Escola } from "./escola.model";

export interface ComponenteCurricular {
    id?: number
    escola: Escola
    nome: string
    cargaHoraria: string
    tipoAvaliacao: TIPO_AVALIACAO
    mediaAprovacao: number
}