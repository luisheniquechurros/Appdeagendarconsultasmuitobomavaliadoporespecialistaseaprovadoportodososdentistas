import { type SQLiteDatabase } from "expo-sqlite";

export async function inicializeDatabase(database: SQLiteDatabase){
    await database.execAsync(
        `
      


        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL,
            senha TEXT NOT NULL,
            nome TEXT,
            cep TEXT,
            endereco TEXT,
            numero TEXT,
            complemento TEXT,
            telefone TEXT,
            planos TEXT
        );

        CREATE TABLE IF NOT EXISTS medicos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            especialidade TEXT NOT NULL,
            localizacao TEXT NOT NULL,
            telefone TEXT,
            numero TEXT
        );

        -- INSERT INTO usuarios (email, senha) VALUES ('churros@gmail.com', '123456');
        -- INSERT INTO medicos (especialidade, localizacao) VALUES ('cardiologista', 'bahia')
        `   
    )
}