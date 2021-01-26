import { BoletimAluno } from "./boletimAluno.model";
import { BoletimComponente } from "./boletimComponente.model";

export interface BoletimAlunoComponente {
    id?: number
    boletimAluno: BoletimAluno
    boletimComponente: BoletimComponente
    faltas?: number
    conceito?: string
}