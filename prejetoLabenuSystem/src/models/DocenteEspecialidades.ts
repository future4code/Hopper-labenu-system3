export type TDocenteEspec = {
    id: string,
    docente_id: string,
    espec_id: string
}

export class DocenteEspec {
    constructor(
        private id: string,
        private docente_id: string,
        private espec_id: string
    ) {
        this.id = id
        this.docente_id = docente_id
        this.espec_id = espec_id
    }

    public getId() {
        return this.id
    }

    public getEstudanteId() {
        return this.docente_id
    }

    public getHobbyId() {
        return this.espec_id
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setEmail(newDocenteId: string) {
        this.docente_id = newDocenteId
    }

    public setPassword(newEspecId: string) {
        this.espec_id = newEspecId
    }
}