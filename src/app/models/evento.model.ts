import { Escola } from "./escola.model";

export interface Evento {
    id?: number
    escola: Escola
    nomeEvento: string
    dataInicioEvento: Date
    dataFimEvento: Date
    horaInicioEvento: Date
    descricaoEvento: string
}