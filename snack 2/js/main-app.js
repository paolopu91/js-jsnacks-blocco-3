/*Snack2
Esercizio numero 2
-Fai inserire un numero, che chiameremo N, all’utente. 
 Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
 Ogni volta che ne crei uno, stampalo.
*/


// chiedo all'utente di darmi un numero
const askUtente = parseInt(prompt("Inserisci qui un numero qualsiasi"));
// dovremo validare il numero inserito

const arrayGenerati = [];

// finche la lunghezza di array generati è < del numero chiesto all'utente, ripeto il ciclo
while(arrayGenerati.length < askUtente){
// creo il nuovo array
    const nuovoArray = [];

 // continuo ad inserire numeri finchè non siamo arrivati a 10 numeri
while(nuovoArray.length < 10){
    const numeriCasuali = Math.floor(Math.random() * 100) + 1;

    if(!nuovoArray.includes(numeriCasuali)){
        
        nuovoArray.push(numeriCasuali);
    }
    
}
// aggiunge l'array generato alla lista degli array richiamata fuori
arrayGenerati.push(nuovoArray);

}
