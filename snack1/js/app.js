/*
Primo esercizio
-Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
 Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
*/


// creo il mio array
let contenitore = [];

// inizializzo la mia somma uguale  a zero fuori dal mio ciclo
let sum = 0

while(sum < 50){

const askUtente = parseInt(prompt ("inserisci qui i tuoi numeri"))
// pusho i miei numeri dentro il mio array

sum += askUtente;
contenitore.push(askUtente)
// creo la mia condizione

console.log(contenitore)
console.log(askUtente)

}






















// questo è come fare la somma degli elementi dentro un array
// const array = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum)