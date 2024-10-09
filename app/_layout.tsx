import { SQLiteProvider } from "expo-sqlite"
import { Slot } from "expo-router";
import { inicializeDatabase } from "./database/inicializeDatabase";
 
export default function Layout(){
    return (
        <SQLiteProvider databaseName="AgendamentoBD.db" onInit={inicializeDatabase}>
            <Slot/>
        </SQLiteProvider>
    )
}
 