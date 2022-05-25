/*Snack3
Esercizio numero 3
-Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
*/

// creo il mio ciclo in cui chiederò all'utente di inserire i numeri 5 volte
let sum = 0

let j = 0
while(j < 5){
// creo la mia costante con cui chiederò all'utente di inserire fino a 5 numeri
const askUtente = parseInt(prompt("Inserisci fino a 5 numeri"))

// creo la somma dei numeri inseriti dall'utente all'interno della pagina
sum += askUtente;
console.log(sum)

j++;
}

