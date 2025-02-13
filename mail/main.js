/* 
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
 */


// Creare una lista mail
const mail = ['gigi@mail.it', 'sara@mail.it', 'michele@mail.it', 'laura@mail.it', 'edo@mail.it', 'sam@mail.it', 'lollo@mail.it', 'pora@mail.it', 'jj@mail.it', 'fill@mail.it', 'olga@mail.it', 'michi@mail.it', 'piero@mail.it', 'piera@mail.it', 'elia@mail.it', 'elisa@mail.it', 'papa@mail.it', 'nonna@mail.it']

//Richiedere all'utente la mail
const userMail = prompt('Inserirsci la tua mail. Es tuamail@mail.it')

//Controllo se l'utente può accedere
let accessPositive = 0

//Controllare la mail nella lista
for (let index = 0; index < mail.length; index++) { 
    //SE la mail è presente confermare
   if (mail[index] === userMail) {
    accessPositive = 1;
    break;
   }
}

// Stampare messaggio per partecipazione o meno
if (accessPositive) {
    console.log('Benvenuto alla festa');  
} else {
    console.log('Non sei invitatə');
    
}



