
//Exercicio 1
//Crie uma função que receba uma lista de números como parâmetro e retorne o maior número da lista. 
// function maiornumero(...valor: number[]): number {
//     let maior: number = valor[0];
//     for (let i = 0; i < valor.length; i++) {
//         if (valor[i] > maior) {
//             maior = valor[i];
//         }
//     }

//     return maior;
// }
 // console.log(maiornumero(4, 0, 0, 2, 8, 9, 2, 2));

//Exercicio 2
//Desenvolva uma função que receba um número como parâmetro e verifique se ele é par ou ímpar. Retorne true se for par e false se for ímpar.
// function Par_impar(numero: number): boolean{
//     if(numero %2 == 0){
//         return true;
//     }
//     return false;
// }

// console.log(Par_impar(5621));

//Exercicio 3
//Implemente uma função que calcule a média aritmética de um array de números e retorne o resultado. Utilize essa função para calcular a média de diferentes conjuntos de números.

// function calcular(...valores: number[]): number{
//     let soma: number = 0;
//     for (let i = 0; i < valores.length; i++){
//         soma += valores[i];
//     }
//     let media: number = soma / valores.length;
    

//     return media;
// }
// console.log(calcular(1, 2, 3, 36));

//Exercicio 4
//Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as letras em caixa alta. Utilize essa função para converter diferentes strings.

// function maiusculo(palavra: string = "eu sou optmus prime!"): string{
//     let letra_maius: string = palavra.toUpperCase();
    
//     return letra_maius;
    

// }
// console.log("Maiúsculas:", maiusculo());

//Exercicio 5
//Desenvolva uma função que determine se um número é primo ou não. Retorne true se for primo e false se não for.

// function primo(numero: number): boolean{
//     if(numero <= 1){
//         return false;
//     }
//     for (let i =2; i*i <=numero; i++){
//         if(numero %i == 0){
//             return false;
//         }
//     }return true;
// }
// console.log(primo(1));

//Exercicio 6
//Implemente uma função que inverta a ordem dos elementos em um array. Utilize essa função para inverter a ordem de diferentes conjuntos de elementos.

// function inverter(...num: number[]): number[]{
//     let invertenum: number[]=[];
//     for(let i = num.length-1; i >=0; i--){
//         invertenum.push(num[i]);
//     }
//     return invertenum;
// }

// console.log(inverter(10, 20, 30, 40, 50));

//Exercicio 7
//Crie uma função que receba um valor e uma porcentagem como parâmetros. A função deve retornar o valor acrescido da porcentagem indicada.

// function porcentagem(num: number, porc: number): number{
//     let res = num * porc / 100

//     return res;
// }

// console.log(porcentagem(50, 15));

//Exercicio 8
//Crie uma função que receba uma string e retorne a mesma string, mas com as palavras em ordem reversa.

// function reverso(palavras: string): string {
   
//     let div_palavra: string[] = palavras.split(" ");
//     let reverso_palavra: string[] = div_palavra.reverse();
//     let revert: string = reverso_palavra.join(" ");

//     return revert;
// }

// console.log(reverso("Hello, World!")); // Saída: "World! Hello,"

//Exercicio 9
//Implemente uma função que retorne a soma de todos os números pares em um array.

// function retorna_par(...vet: number[]): number[]{
//     soma:  number = 0;
    
//     for (let i[0]){
//         if(i%2==0)
//         soma =-i;
//     }
//     return soma;
// }
// console.log(retorna_par(1,5,8,40,22,35));

//Exercicio 10
//Crie uma função que calcule o fatorial de um número. Utilize essa função para calcular o fatorial de diferentes números.

// function fatorial(numero: number): number{
    
//     let fat: number = 1;
    
//     if(numero == 0 || numero == 1){
//         return fat;

//     }
//     for (let i =2; i <= numero; i++){
//         fat *= i;
//     }
    
//     return fat;
// }
