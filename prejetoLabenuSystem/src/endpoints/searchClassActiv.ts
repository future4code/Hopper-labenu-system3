import { Request, Response } from "express";
import { TurmaDatabase } from "../database/TurmaDatabase";

export const searchClassActiv = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const turmaDatabase = new TurmaDatabase
        let result = await turmaDatabase.getClassActiv()

        const ativas = result.filter()

        console.log(result)
        res.status(200).send({TurmasAtivas: result})
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }

}