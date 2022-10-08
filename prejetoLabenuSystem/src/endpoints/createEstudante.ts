import { Request, Response } from "express";


import {Estudante} from "../models/Estudante";
import { v4 as generateId } from 'uuid';
import { TurmaDatabase } from "../database/TurmaDatabase";
import { EstudanteDatabase } from "../database/EstudanteDatabase";

export const createEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        let {nome, email, dataNascimento, turmaId} = req.body
        // let {nome, email, dataNascimento} = req.body
        
        const estudanteDatabase = new EstudanteDatabase
        
        if(!nome || !email || !dataNascimento || !turmaId){
            throw new Error("Body inválido");
        }

        const alunoExist = await estudanteDatabase.getByName(nome)
        if(alunoExist[0].nome.length > 0) {
            throw new Error("Aluno já registrado");            
        }

        function FormataStringData(data: string) {
            var dia  = data.split("/")[0];
            var mes  = data.split("/")[1];
            var ano  = data.split("/")[2];
      
            return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
        }

        let dateForTable: any = FormataStringData(dataNascimento)

        const newStudent = new Estudante(
            generateId(),
            nome,
            email,
            dateForTable,
            turmaId
        )
        
        await estudanteDatabase.create(newStudent)

        res.status(201).send({message: "Aluno cadastrado", newStudent: newStudent})

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}