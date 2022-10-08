
import { Turma } from "../models/Turma";
import { BaseDatabase } from "./BaseDatabase";

export class TurmaDatabase extends BaseDatabase {
  TABLE_NAME = "Turma"
 
  public async getAll():Promise<Turma>  {
    return super.getAll()
   }

  public async create(Turma: Turma):Promise<void> {
    await super.create(Turma)
  }

  public async getById(id: string) {
    return super.getById(id)
  }

  public async getClassActiv(){
    const result = await BaseDatabase.connection(this.TABLE_NAME)
    .select()
    return result
  }
}
