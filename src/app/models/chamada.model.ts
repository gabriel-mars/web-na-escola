import { Classe } from "./classe.model";
import { Escola } from "./escola.model";

export interface Chamada {
    id?: number
    escola: Escola
    classe: Classe
    dataChamada: Date
    chamadaFinalizada: boolean
}