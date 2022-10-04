import { Product } from "../models/Estudante";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  TABLE_NAME = "Labe_Products"
 
  public async getAll():Promise<Product>  {
    return super.getAll()
   }

  public async create(product: Product):Promise<void> {
    await super.create(product)
  }

  public async getById(id: string) {
    return super.getById(id)
  }
}
