export class Aluno {
    nome: string;
    email: string;
    dataNascimento: string;
    sexo: string;

    constructor(){}
}

export class ResponseAlunos {
    data: Aluno[] = [];
}