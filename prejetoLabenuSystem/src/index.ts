import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {createTurma} from "./endpoints/createTurma"
import {createDocente} from './endpoints/createDocente'
import { ping } from './endpoints/ping'
import {getDocentes} from './endpoints/getDocentes'
import {mudarDocente} from './endpoints/mudarDocente'
import { createEstudante } from './endpoints/createEstudante'
import { searchEstudante } from './endpoints/searchEstudante'
import { editEstudanteTurma } from './endpoints/editEstudanteTurma'
import { searchClassActiv } from './endpoints/searchClassActiv'


dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

// Turma
app.post("/turma", createTurma)


app.get("/turmas/ativas", searchClassActiv)

//

// Estudante
app.post("/estudante", createEstudante)

app.get("/estudante/:nome", searchEstudante)

app.put("/estudante/editar-turma", editEstudanteTurma)

// Docente
app.post("/criar-docente", createDocente)


app.get("/docentes", getDocentes)

app.post("/mudar-docente/:id", mudarDocente)
app.get("/ping", ping)

