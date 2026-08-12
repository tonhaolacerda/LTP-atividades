class Funcionario {
    constructor(nome,salario) {
    this.nome = nome
    this.salario = salario
    }

    trabalhar(Funcionario) {
        console.log(`O cara ta trabalhando ${this.nome}`)
    }

}

class Professor extends Funcionario {
    constructor(nome,salario,disciplina){
        super(nome,salario);
        this.disciplina = disciplina;
    }

    darAula(Professor) {
        return(`O professor ${this.nome} está ministrando a disciplina de Programacao`)
    }

}

const professor1 = new Professor("Anthony", 20, "Programacao")

console.log(professor1.nome);
console.log(professor1.disciplina);
console.log(professor1.salario);

professor1.trabalhar();
professor1.darAula();