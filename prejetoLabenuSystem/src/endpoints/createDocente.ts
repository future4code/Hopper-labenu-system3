import { Docente } from './../models/Docente';
import { DocenteData } from './../database/DocenteData';
import { Request, Response } from "express"
import { v4 as generateId } from 'uuid';
import moment from 'moment'

export const createDocente = async (req:Request, res:Response) => {
     {
        let errorCode = 400
        try {
            const {nome, email, data_nasc, turma_id} = req.body

            if(!nome || !email || !data_nasc || !turma_id) {
                throw new Error("Preencha todos os campos corretamente")           
            }
    
            const docenteData = new DocenteData()
            const emailExiste = await docenteData.buscaDocente(email)
    
            if(emailExiste){
                errorCode = 401
                throw new Error("Email Já cadastrado");            
            }

            const idTurmaExiste = await docenteData.buscaIdTurma(turma_id)

            if(!idTurmaExiste.length) {
                errorCode = 401
                throw new Error("Turma inexistente")                
            }

            const dataConvertida = moment(data_nasc,"DD/MM/YYYY").format("YYYY/MM/DD")

            const docente = new Docente(
                generateId(),
                nome,
                email,
                dataConvertida,
                turma_id
            )

            const response = await docenteData.criarDocente(docente)

            res.status(201).send({ message: "Docente criado", docente: docente })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}