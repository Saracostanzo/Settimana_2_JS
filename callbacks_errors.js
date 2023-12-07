// Teoria
// In JavaScript, quando si verificano problemi durante l'esecuzione di una funzione (come una callback), 
// possiamo usarlo try, catch, e throw new Error per gestire questi problemi.

// 1. try: È una struttura che definisce un blocco di codice in cui potrebbero verificarsi problemi. 
// Questo blocco contiene il codice che desideriamo monitorare per eventuali errori.

// 2. catch: È un blocco di codice che viene eseguito solo se si verifica un errore nel blocco try. 
// Serve per gestire l'errore e prendere delle decisioni su come procedere. Dentro il blocco catch, si può accedere all'errore generato durante il blocco try.

// 3. throw new Error: Questo è un modo di segnalare manualmente un errore. 
// Quando il codice all'interno del blocco try trova qualcosa di sbagliato, può fermarsi e lanciare un errore usando throw new Error('Messaggio di Errore'). Questo interrompe immediatamente l'esecuzione del blocco try e passa al blocco catch.

// In breve, try è dove mettiamo il codice che potrebbe generare un problema, 
// catch è dove gestiamo l'errore se ne succede uno,
// throw new Error è come alzare una mano dicendo "Qualcosa non va qui!" quando troviamo un problema che non possiamo gestire direttamente.




// ESERCIZIO


// creare un'applicazione di calcolatrice che accetti due numeri e una callback per eseguire diverse operazioni matematiche.
//  L'esercizio si concentrerà sulla gestione degli errori all'interno delle callback.

// Funzione Principale:

// Definisci una funzione chiamata calcolatrice che accetta tre argomenti: due numeri e una callback. La callback dovrebbe eseguire un'operazione matematica sui due numeri forniti.
// Callback per le Operazioni:

// Crea quattro diverse funzioni di callback: somma, sottrai, moltiplica e dividi. Ogni callback dovrebbe gestire il caso in cui il secondo numero è zero per evitare la divisione per zero.
// Gestione degli Errori:

// All'interno di ciascuna callback, verifica se il secondo numero è zero. Se è zero e l'operazione è la divisione, lancia un errore con throw e gestiscilo all'interno della funzione principale.
// Esecuzione delle Callbacks:

// All'interno della funzione principale, chiama la callback fornita con i due numeri come argomenti.
// Utilizza un blocco try...catch per gestire gli errori lanciati dalle callback.
// Risultati:

// Stampa il risultato dell'operazione se tutto è andato bene.
// Stampa un messaggio di errore se si è verificato un errore durante l'esecuzione della callback.
// Esempio di Utilizzo:

// Utilizza la funzione calcolatrice con diverse callback e numeri per testare la gestione degli errori.

// Definisci la funzione calcolatrice con gestione degli errori


//....
  
  // Esempio di utilizzo
  calcolatrice(10, 5, somma);
  calcolatrice(10, 0, dividi);
  calcolatrice(8, 2, moltiplica);
  calcolatrice(7, 3, sottrai);
  