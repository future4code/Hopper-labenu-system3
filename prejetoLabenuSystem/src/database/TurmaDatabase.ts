
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
}
