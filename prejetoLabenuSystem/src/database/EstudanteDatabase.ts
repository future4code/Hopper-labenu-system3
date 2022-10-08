import { Estudante } from "../models/Estudante";
import BaseDatabase from "./BaseDatabase";

export class EstudanteDatabase extends BaseDatabase{
    TABLE_NAME = "Estudante"

    public async create(Estudante: Estudante): Promise<void> {
        await super.create(Estudante)
    }

    public async getByName(nome: string){
        const result = await BaseDatabase.connection(this.TABLE_NAME)
        .select()
        .where({nome})
        return result
    }

    public async getByClass(email:string){
        const result = await BaseDatabase.connection(this.TABLE_NAME)
        .select("turma_id")
        .where({email})
        return result
    }

    public async editClass(newClass:string , email:string){
        const result = await BaseDatabase.connection(this.TABLE_NAME)
        .update({turma_id : newClass})
        .where({email : email})
        return result
    }

}