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
function Par_impar(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    return false;
}
console.log(Par_impar(5621));
