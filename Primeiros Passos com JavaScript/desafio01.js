/*  DESAFIO 01 - CALCULADORA DE VALORES 

    Faça um programa calcular o valor de uma viagem.
    
    Você terá três variáveis. Sendo elas:
    1 - Preço do combustível;
    2 - Gasto médio de combustível por KM;
    3 - Distância de KM na viagem.
    
    Imprima no console o valor que será gasto para realizar a viagem. */

const valor = 5.25;
const media = 10;
const distancia = 100;

litros = distancia / media;

const total = litros * valor;
console.log("O valor a ser gasto nessa viagem é de: R$" , total.toFixed(2)); /* toFixed serve para transformar a minha variável em um texto, utilizando após a virgula somente as casas declaradas dentro dos parênteses. Neste caso, apenas duas casas após a virgula. */