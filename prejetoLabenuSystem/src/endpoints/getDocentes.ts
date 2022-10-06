import { DocenteData } from './../database/DocenteData';
import { Request, Response } from "express"

export const getDocentes = async (req:Request, res: Response) => {
    let errorCode = 400
    try {
        const docenteData = new DocenteData()
        const result = await docenteData.getAllDocentes()

        res.status(200).send({docente: result})
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}