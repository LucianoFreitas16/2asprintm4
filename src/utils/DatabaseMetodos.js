import { Database } from "../infra/Database.js";

class DatabaseMetodos{
    static gerarDicas(){
        let x = Math.random() * Database.Dicas.length;
        x = Math.floor(x);
        console.log(x)
        return Database.Dicas.length >= 1 ? Database.Dicas[x] : Database.Dicas;
    }

    static inserirDica(dica){
        Database.Dicas = [...Database.Dicas, dica];
        return Database.Dicas;
    }
}

export default DatabaseMetodos;