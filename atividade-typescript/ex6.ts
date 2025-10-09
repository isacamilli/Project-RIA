interface Animal {
    nome: string;
    emitirSom(): string;
    mover(): string;
}

class Cachorro implements Animal {
    public nome: string;
    public raca: string;
    public idade: number;

    constructor(nome: string, raca: string, idade: number) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }

    public emitirSom(): string {
        return `${this.nome} está latindo`;
    }

    public mover(): string {
        return `${this.nome} está correndo rapidamente`;
    }

    public abanarRabo(): string {
        return `${this.nome} está abanando o rabo!`;
    }
}

class Passaro implements Animal {
    public nome: string;
    public especie: string;

    constructor(nome: string, especie: string) {
        this.nome = nome;
        this.especie = especie;
    }

    public emitirSom(): string {
        return `${this.nome} (${this.especie}) está cantando`;
    }

    public mover(): string {
        return `${this.nome} está abanando com suas asas`;
    }

    public construirNinho(): string {
        return `${this.nome} está construindo um ninho`;
    }
}

console.log("=== TESTE DAS CLASSES COM INTERFACE COMUM ===\n");

const meuCachorro = new Cachorro("Rex", "Labrador", 3);
const meuPassaro = new Passaro("Piu", "Canário");

const animais: Animal[] = [meuCachorro, meuPassaro];

console.log("=== MÉTODOS DA INTERFACE ===");
animais.forEach(animal => {
    console.log(animal.emitirSom());
    console.log(animal.mover());
    console.log("---");
});

console.log("=== MÉTODOS ESPECÍFICOS ===");
console.log(meuCachorro.abanarRabo());
console.log(meuPassaro.construirNinho());
console.log("---");

console.log("=== APÓS ALTERAR ATRIBUTOS ===");
meuCachorro.nome = "Thor";
meuCachorro.idade = 4;

meuPassaro.nome = "Loro";

console.log(meuCachorro.emitirSom());
console.log(meuPassaro.emitirSom());
console.log(meuPassaro.mover());

console.log("\n=== DEMONSTRAÇÃO DE POLIMORFISMO ===");
function fazerAnimalAgir(animal: Animal): void {
    console.log(`Ação do ${animal.nome}:`);
    console.log(`  - Som: ${animal.emitirSom()}`);
    console.log(`  - Movimento: ${animal.mover()}`);
}

fazerAnimalAgir(meuCachorro);
fazerAnimalAgir(meuPassaro);