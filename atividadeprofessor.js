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
    
}