/* 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo.
 */

/* 
TOOLS
- math random
- if else
- log
 */

// Generazione randomica da 1 a 6 numero utente
let userNumber = Math.random() * 6;
userNumberRound = Math.round(userNumber)
console.log(userNumberRound);


// Generazione randomica da 1 a 6 numero computer
const computerNumber = Math.random() * 6;
computerNumberRound = Math.round(computerNumber)
console.log(computerNumberRound);

// Stabilire qual'è il numero più alto
if (userNumberRound > computerNumberRound) {
    // Stmpare un messaggio
    console.log('Your number is ' + userNumberRound + ' the number of the computer is ' + computerNumberRound + ' YOU WIN');
} else if (computerNumberRound > userNumberRound) {
    console.log('Your number is ' + userNumberRound + ' the number of the computer is ' + computerNumberRound + ' YOU LOSE');
} else {
    console.log('Your number is ' + userNumberRound + ' the number of the computer is ' + computerNumberRound + ' YOU HAVE DRAWN');
}
