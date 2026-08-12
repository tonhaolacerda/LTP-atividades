// Classe base que representa um veÃ­culo genÃ©rico
class Veiculo {
    // Construtor da classe Veiculo recebe marca e modelo
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    // MÃ©todo para ligar o veÃ­culo
    ligar() {
        console.log(`${this.marca} ${this.modelo} foi ligado.`);
    }

    // MÃ©todo para desligar o veÃ­culo
    desligar() {
        console.log(`${this.marca} ${this.modelo} foi desligado.`);
    }
}

// Classe Caminhao herda de Veiculo
class Caminhao extends Veiculo {
    // Construtor da classe Caminhao recebe marca, modelo e capacidade da carga
    constructor(marca, modelo, capacidadeCarga) {
        // Chama o construtor da classe pai (Veiculo)
        super(marca, modelo);
        this.capacidadeCarga = capacidadeCarga;
    }

    // MÃ©todo para carregar o caminhÃ£o com um peso especÃ­fico
    carregar(peso) {
        // Verifica se o peso informado Ã© maior que zero
        if (peso <= 0) {
            console.log("O peso da carga deve ser maior que zero.");
            return;
        }

        // Verifica se a carga excede a capacidade do caminhÃ£o
        if (peso > this.capacidadeCarga) {
            console.log(
                `Carga excedida. O caminhÃ£o suporta no mÃ¡ximo ${this.capacidadeCarga} kg.`
            );
            return;
        }

        // Se tudo estiver OK, mostra a mensagem de carga realizada
        console.log(
            `CaminhÃ£o carregado com ${peso} kg de carga.`
        );
    }
}

// Criando um objeto da classe Caminhao
const caminhao1 = new Caminhao("Volvo", "FH 540", 30000);

// Testando os atributos do objeto criado
console.log(`Marca: ${caminhao1.marca}`);
console.log(`Modelo: ${caminhao1.modelo}`);
console.log(`Capacidade de carga: ${caminhao1.capacidadeCarga} kg`);

// Testando os mÃ©todos da classe
caminhao1.ligar();
caminhao1.carregar(20000);
caminhao1.carregar(35000);
caminhao1.desligar();


class Onibus extends Veiculo {
    constructor(marca, modelo, capacidade) {
        super(marca, modelo);
        this.capacidade = capacidade;
        this.quantidadePassageiros = 0;
    }

    embarcar(quantidade) {
        if (this.quantidadePassageiros + quantidade <= this.capacidade) {
            this.quantidadePassageiros += quantidade;
            console.log(quantidade + " passageiros embarcaram.");
        } else {
            console.log("O onibus lotou.");
        }
    }
}

const onibus = new Onibus("Onibus urbano", "Onibus legal", 50);

console.log("Marca:", onibus.marca);
console.log("Modelo:", onibus.modelo);
console.log("Passageiros:", onibus.quantidadePassageiros);
console.log("Capacidade:", onibus.capacidade);

onibus.ligar();
onibus.embarcar(30);
onibus.embarcar(51);
onibus.desligar();