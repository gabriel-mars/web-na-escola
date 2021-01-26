import { STATUS_BOLETIM } from "../enums/STATUS_BOLETIM";
import { Aluno } from "./aluno.model";
import { Boletim } from "./boletim.model";

export interface BoletimAluno {
    id?: number
    aluno: Aluno
    boletim: Boletim
    status: STATUS_BOLETIM
}