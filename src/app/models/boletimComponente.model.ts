import { Boletim } from "./boletim.model";
import { ComponenteCurricular } from "./componente.model";

export interface BoletimComponente {
    id?: number
    boletim: Boletim
    componente: ComponenteCurricular
}