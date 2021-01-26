import { TIPO_AVISO } from "../enums/TIPO_AVISO";
import { Aluno } from "./aluno.model";
import { Classe } from "./classe.model";
import { Escola } from "./escola.model";

export interface Aviso {
    id?: number
    tituloAviso: string
    anoClasse?: string
    classe?: Classe
    escola: Escola
    dataAviso: Date
    tipoAviso: TIPO_AVISO
    aluno?: Aluno
}