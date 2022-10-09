export type TEstudante = {
    id: string,
    name: string,
    email: string,
    data_nasc: Date,
    turma_id:string
}

export class Estudante {

    constructor(
        private id: string,
        private nome: string,
        private email: string,
        private data_nasc: Date,
        private turma_id:string
    ) {
        this.id = id
        this.nome = nome
        this.email = email
        this.data_nasc = data_nasc
        this.turma_id = turma_id
    }

    public getId() {
        return this.id
    }

    public getName() {
        return this.nome
    }

    public getEmail() {
        return this.email
    }

    public getDataNasc() {
        return this.data_nasc
    }

    public getTurmaId() {
        return this.turma_id
    }


    public setId(newId: string) {
        this.id = newId
    }

    public setName(newName: string) {
        this.nome = newName
    }

    public setEmail(newEmail: string) {
        this.email = newEmail
    }

    public setDataNas(newDataNasc: any) {
        this.data_nasc = newDataNasc
    }

    public setTurmaId(newTurmaId: string) {
        this.turma_id = newTurmaId
    }
}