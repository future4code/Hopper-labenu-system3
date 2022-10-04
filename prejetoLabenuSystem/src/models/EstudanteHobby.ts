export type TEHobby = {
    id: string,
    estudante_id: string,
    hobby_id: string
}

export class EstudanteHobby {
    constructor(
        private id: string,
        private estudante_id: string,
        private hobby_id: string
    ) {
        this.id = id
        this.estudante_id = estudante_id
        this.hobby_id = hobby_id
    }

    public getId() {
        return this.id
    }

    public getEstudanteId() {
        return this.estudante_id
    }

    public getHobbyId() {
        return this.hobby_id
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setEmail(newEstudanteId: string) {
        this.estudante_id = newEstudanteId
    }

    public setPassword(newHobbyId: string) {
        this.hobby_id = newHobbyId
    }
}