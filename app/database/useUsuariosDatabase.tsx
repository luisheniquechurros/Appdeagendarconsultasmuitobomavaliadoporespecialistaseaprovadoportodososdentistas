import { useSQLiteContext } from "expo-sqlite"

export type UsuariosDatabase = {
    id: number;
    email: string;
    senha: string;
    nome: string;
    cep: string;
    endereco: string;
    numero: string;
    complemento: string;
    telefone: string;
    planos: string;
}


export type MedicosDatabase = {
    id: number;
    nome: string;
    especialidade: string;
    localizacao: string;
    telefone: string;
    numero: string;
}

export function useUsuariosDatabase() {
    
    const database = useSQLiteContext()

    async function create(email: string, senha: string,  nome: string, cep: string, endereco: string, numero: string, complemento: string, telefone: string, planos: string) {
        try {

            const query = "SELECT * FROM USUARIOS WHERE email = ?";
            const result = await database.getAllAsync(query, [email])

            if (result.length != 0) {
                throw new Error("Usuário já cadastrado")
            }
            console.log(email, senha, nome, cep, endereco, numero, complemento, telefone, planos);
            await database.execSync(`INSERT INTO usuarios (email, senha, nome, cep, endereco, numero, complemento, telefone, planos)
                                    VALUES ('${email}', '${senha}', '${nome}', '${cep}', '${endereco}', '${numero}', '${complemento}', '${telefone}', '${planos}')`)
            return true
        } catch (error) {
            throw error
        }
    }

    async function login(email: string, senha: string) {
        try {
            const query = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";
            const resultado = await database.getFirstAsync<UsuariosDatabase>(query, [email, senha]);

            if (resultado) {
                return resultado;
            } else {
               
                return false;
            }
        } catch (error) {
            throw error;
        }
    }

    async function listar() {
        try {
            const query = "SELECT * FROM usuarios";
            const resultado = await database.getAllAsync<UsuariosDatabase>(query);
            return resultado;
        } catch (error) {
            throw error;
        }

    }

    async function buscarMedico(especialidade: string, endereco: string) {
        try {
            let query = "SELECT * FROM medicos WHERE 1=1";
            let params: string[] = [];
    
            
            if (especialidade) {
                query += " AND especialidade LIKE ?";
                params.push(`%${especialidade}%`);
            }
    
           
            if (endereco) {
                query += " AND localizacao LIKE ?";
                params.push(`%${endereco}%`);
            }
    
            const resultado = await database.getAllAsync<MedicosDatabase>(query, params);
            return resultado;
        } catch (error) {
            throw error;
        }
    }
    

    return { create, login, listar, buscarMedico };
}