export type TTurma = {
    id: string,
    nome: string,
    modulo: string
}

export class Turma {
    constructor(
        private id: string,
        private nome: string,
        private modulo: string
    ) {
        this.id = id
        this.nome = nome
        this.modulo = modulo
    }

    public getId() {
        return this.id
    }

    public getNome() {
        return this.nome
    }

    public getModulo() {
        return this.modulo
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setEmail(newNome: string) {
        this.nome = newNome
    }

    public setPassword(newModulo: string) {
        this.modulo = newModulo
    }
}