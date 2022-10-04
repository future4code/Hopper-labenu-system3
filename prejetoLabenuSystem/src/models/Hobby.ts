export type TEHobby = {
    id: string,
    nome: string
}

export class EstudanteHobby {
    constructor(
        private id: string,
        private nome: string
    ) {
        this.id = id
        this.nome = nome
    }

    public getId() {
        return this.id
    }

    public getHobby() {
        return this.nome
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setEmail(newName: string) {
        this.nome = newName
    }
}