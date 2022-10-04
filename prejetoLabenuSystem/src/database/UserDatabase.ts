import { User } from "../models/Turma";
import BaseDatabase from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  TABLE_NAME = "Labe_Users"

  public async getAll():Promise<any> {
   return super.getAll()
  }

  public async create(user: User):Promise<void> {
    await super.create(user)
  }
  public async getById(id: string) {
    return super.getById(id)
  }
}
