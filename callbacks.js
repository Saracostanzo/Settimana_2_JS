// Teoria

// Una callback in JavaScript è una funzione che viene passata come argomento a un'altra funzione.
// Questa funzione "invitata" (la callback) sarà chiamata quando si verifica un determinato evento o quando è il momento opportuno, come alla fine di un'operazione asincrona.

// Sono utilizzate spesso in JavaScript, soprattutto per gestire operazioni asincrone come il caricamento di file o le richieste di rete. 
// Sono come piccoli pezzi di codice che vengono eseguiti quando qualcosa è pronto o quando un'azione è completata.




// ESERCIZIO

// implementare una calcolatrice che accetta un array di numeri e una callback per eseguire diverse operazioni matematiche. La tua calcolatrice deve essere in grado di sommare, sottrarre, moltiplicare e dividere.

// Funzione Principale:

// Definisci una funzione chiamata calculator che accetta due argomenti: una callback e un numero variabile di numeri (utilizzando il Rest Operator).
// Callback per le Operazioni:

// Crea quattro diverse funzioni di callback: somma, sottrai, moltiplica e dividi. Ogni callback accetta un numero variabile di argomenti (utilizzando il Rest Operator) e restituisce il risultato dell'operazione corrispondente.
// Esecuzione delle Callbacks:

// All'interno della funzione calculator, chiama la callback fornita con gli elementi dell'array come argomenti separati, utilizzando lo Spread Operator.
// Stampa un messaggio indicando che l'elaborazione dell'operazione è in corso.
// Timeout e Risultati:

// Utilizza setTimeout per ritardare la visualizzazione del risultato di ciascuna operazione di 2 secondi.
// All'interno della funzione di callback, stampa il risultato ottenuto.
// Esempio di Utilizzo:

// Crea un array di numeri numbers1.
// Utilizza la funzione calculator per eseguire le operazioni di somma, sottrazione, moltiplicazione e divisione con il tuo array di numeri.



//...

calculator(somma, ...numbers1);
calculator(sottrai, ...numbers1);
calculator(moltiplica, ...numbers1);
calculator(dividi, ...numbers1);