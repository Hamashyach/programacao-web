"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function calcular() {
    var valores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        valores[_i] = arguments[_i];
    }
    var soma = 0;
    for (var i = 0; i < valores.length; i++) {
        soma += valores[i];
    }
    var media = soma / valores.length;
    return media;
}
console.log(calcular(1, 2, 3, 36));
//Exercicio 4
//Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as letras em caixa alta. Utilize essa função para converter diferentes strings.
//function maiusculo(palavra: string)
