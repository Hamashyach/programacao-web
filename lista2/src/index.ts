// 01 – Complete a classe Carro para que os atributos da mesma sejam //acessados somente por métodos (Getters/ Setters) e tenha um método //para calcular a idade do carro com base no ano atual. Crie uma //instância de Carro 

class Carro{
    marca: string;
    modelo: string;
    cor: string;
    ano_de_fabricacao: number;


    constructor(marca:string, modelo:string, cor:string, ano_de_fabricacao:number){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ano_de_fabricacao = ano_de_fabricacao;
    }




get getmarca(){
    return this.marca;
}


set setmarca(marca:string){
    this.marca = marca;
}


get getModelo(){
    return this.modelo;
}


set setmodelo(modelo:string){
    this.modelo = modelo;
}


get getcor(){
    return this.cor;
}


set setcor(cor:string){
    this.cor = cor;
}


get getano_de_fabricacao(){
    return this.ano_de_fabricacao;
}


set setano_de_fabricacao(ano_de_fabricacao:number){
    this.ano_de_fabricacao;
}


CalcularIdade(){
    let anoAtual = new Date().getFullYear();
    return anoAtual - this.ano_de_fabricacao;
}
}


let carro = new Carro ("Porsche","Taycan GTS", "Prata", 2021);
carro.setcor = "Rosa";
console.log(carro);

// 2 – Desenvolva uma classe Calculadora em TypeScript
// Crie uma classe Calculadora que encapsula funcionalidades matemáticas básicas. Esta classe deve
// possuir os seguintes requisitos:
// • Dois atributos numéricos (valor1 e valor2) para armazenar os operandos das operações.
// • Um construtor que aceite dois números como parâmetros e os atribua aos respectivos
// atributos.
// • Métodos para realizar as seguintes operações matemáticas:
// ◦ Soma: retorna a adição dos dois valores.
// ◦ Subtração: retorna a diferença entre os dois valores.
// ◦ Multiplicação: retorna o resultado da multiplicação dos dois valores.
// ◦ Divisão: retorna o resultado da divisão do primeiro valor pelo segundo valor. Atenção:
// evite divisões por zero.
// ◦ Porcentagem: retorna a porcentagem do primeiro valor em relação ao segundo valor.
// ◦ Getters e Setters
// Certifique-se de que a classe lida corretamente com situações de erro, como a divisão por zero.
// Teste todos os métodos.


class calculadora{
    num1: number;
    num2:number;




    constructor(num1:number, num2:number){
        this.num1 = num1;
        this.num2 = num2;
    }


    get getnum1(): number {
        return this.num1;
    }


    set setnum1(num1: number){
        this.num1 = num1;
    }


   
    get getnum2(): number {
        return this.num2;
    }


    set setnum2(num2: number){
        this.num2 = num2;
    }


    adicao(){
        return this.num1 + this.num2;


    }


    subtracao(){
        return this.num1 - this.num2;
    }


    divisao(){
        if(this.num2 == 0){
            console.log("Impossivel dividir por 0!");


        }
        return this.num1 / this.num2;
    }


    multiplicacao(){
        return this.num1 * this.num2;
    }


    porcentagem(){
        return  (this.num1 / this.num2) * 100


    }


}


const Calculadora = new calculadora(100, 50);
console.log("Adição:", Calculadora.adicao());
console.log("Subtração:", Calculadora.subtracao());
console.log("Divisão:", Calculadora.divisao());
console.log("Multiplicação:", Calculadora.multiplicacao());
console.log("Porcentagem:", Calculadora.porcentagem());

// 03 – Desenvolva uma classe Produto em TypeScript
// Crie uma classe Produto que represente um item disponível em um catálogo de uma loja virtual. A
// classe deve ter as seguintes características:
// Atributos:
// • nome: uma string que representa o nome do produto.
// • preco: um número que representa o preço do produto.
// • quantidadeEmEstoque: um número inteiro que indica a quantidade disponível em estoque do
// produto.
// Construtor:
// • Deve aceitar três parâmetros: nome, preco e quantidadeEmEstoque, e atribuí-los aos
// respectivos atributos da classe.
// Métodos:
// • calcularValorTotalEmEstoque(): retorna o valor total em estoque do produto, calculado
// multiplicando o preço pelo quantidade em estoque.
// • reporEstoque(quantidade: number): adiciona a quantidade especificada ao estoque do
// produto.
// • vender(quantidade: number): remove a quantidade especificada do estoque do produto. Se a
// quantidade desejada for maior do que a disponível em estoque, deve ser lançado um erro
// indicando que não há estoque suficiente.
// • Getters e Setters
// Certifique-se de que a classe lida corretamente com situações de erro, como tentar vender mais
// produtos do que há em estoque. Teste todos os métodos


class Produto{
    nome: string;
    preco: number;
    quantidade_em_estoque: number;


    constructor(nome: string, preco: number, quantidade_em_estoque: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade_em_estoque = quantidade_em_estoque;
    }


    get getnome(): string {
        return this.nome;
    }


    set setnome(nome: string) {
        this.nome = nome;
    }


    get getpreco(): number {
        return this.preco;
    }


    set setpreco(preco: number) {
         if (preco < 0) {
            throw new Error("O preco deve ser um numero positivo!");
        }
        this.preco = preco;
    }


    get getquantidade_em_estoque(): number {
        return this.quantidade_em_estoque;
    }


    set setquantidade_em_estoque(quantidade: number) {
        if (quantidade < 0) {
            throw new Error("A quantidade em estoque deve ser um numero positivo!");
        }
        this.quantidade_em_estoque = quantidade;
    }


    calcularValorTotalEmEstoque(): number {
        return this.preco * this.quantidade_em_estoque;
    }


    reporEstoque(quantidade: number) {
         if (quantidade < 0) {
            throw new Error("A quantidade deve ser um numero positivo!");
        }
        this.quantidade_em_estoque += quantidade;
    }


    vender(quantidade: number) {
        if (quantidade <= 0) {
            throw new Error("A quantidade vendida deve ser um numero positivo");
        }
        if (quantidade > this.quantidade_em_estoque) {
            throw new Error("Nao ha estoque suficiente!");
        }
        this.quantidade_em_estoque-= quantidade;
    }

}


let produto = new Produto ( "xicara", 29.90, 25);


console.log("O valor total em estoque é: ", produto.calcularValorTotalEmEstoque());


produto.vender(2);
console.log("Quantidade em estoque apos venda: ", produto.quantidade_em_estoque);


produto.reporEstoque(20);
console.log("Quantidade em estoque apos reposicao: ", produto.quantidade_em_estoque);


produto.nome = "Caneca";
produto.preco = 29.90;
produto.quantidade_em_estoque = 100;


console.log("Caneca", produto.nome);
console.log(30.50, produto.preco);
