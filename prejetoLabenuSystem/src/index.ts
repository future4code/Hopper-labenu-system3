import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {createTurma} from "./endpoints/createTurma"
import { createEstudante } from './endpoints/createEstudante'
import { searchEstudante } from './endpoints/searchEstudante'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

// Turma
app.post("/turma", createTurma)

//

//

// Estudante
app.post("/estudante", createEstudante)

app.get("/estudante/:nome", searchEstudante)

//

// Docente