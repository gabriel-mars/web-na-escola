import { User } from "./user.model";

export interface Escola {
    id?: number
    codigoMec: number
    nome: string
    email: string
    telefone: string
    cep?: string
    endereco?: string
    municipio?: string
    uf?: string
    logo?: string
    diretor?: User
}