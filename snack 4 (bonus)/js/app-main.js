/*
Snack4 (Bonus)
Esercizio Bonus numero 4
-In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. 
 Interrompi il ciclo appena il nome è stato trovato.
*/

// creo la mia lista di invitati alla festa
const listaInvitati = ["matteo","luca","paolo","valerio","riccardo","lucia","livia","laura"];
console.log(listaInvitati)


// chiedo all'utente di inserire il suo nome
let nomeInvitato = prompt("Prego inserisca qui il suo nome");

let nomeTrovato;

for(let i = 0; i < listaInvitati.length ; i++) {

// vado a creare la mia condizione di verifica invitato

if (listaInvitati[i] === nomeInvitato ) {
nomeTrovato = [i];
console.log("Il suo nome " + nomeInvitato + " è presente sulla lista, prego entri")
break;
} else {
console.log("Il suo nome " + nomeInvitato + " non è presente sulla lista, non posso farla entrare")
}
 
}