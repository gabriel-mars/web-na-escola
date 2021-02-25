import { TIPO_USUARIO } from "../enums/TIPO_USUARIO";

export interface User {
    id?: number
    nome: string
    email: string
    cpf: string
    senha?: string
    telefone?: string
    endereco?: string
    municipio?: string
    uf?: string
    cep?: string
    hash?: string
    tipoUsuario: TIPO_USUARIO
}