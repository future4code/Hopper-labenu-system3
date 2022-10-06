import { DocenteData } from './../database/DocenteData';
import { Request, Response } from "express"

export const mudarDocente = async (req:Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const {turma_id} = req.body

        const docenteData = new DocenteData
        const docenteExiste = await docenteData.getDocenteId(id)

        if(!docenteExiste.length){
            errorCode = 401
            throw new Error("Cadastro inexistente");            
        }
        
        const idTurmaExiste = await docenteData.buscaIdTurma(turma_id)

            if(!idTurmaExiste.length) {
                errorCode = 401
                throw new Error("Turma inexistente")                
            }

            const response = await docenteData.mudarDocenteTurma(id,turma_id)

            res.status(200).send({message: response})

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}