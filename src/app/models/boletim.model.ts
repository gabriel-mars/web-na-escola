import { PERIODO_BOLETIM } from "../enums/PERIODO_BOLETIM";
import { Classe } from "./classe.model";
import { Escola } from "./escola.model";

export interface Boletim {
    id?: number
    escola: Escola
    classe: Classe
    bimestre: PERIODO_BOLETIM
    observacao?: string
    dataBoletim: Date
    individualGerado?: boolean
}