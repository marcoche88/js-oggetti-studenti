/*
ES 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto.
ES 2
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(),
di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*/

// ESERCIZIO 1
/*
1- creare oggetto studente
2- stampare tutte le proprietà dell'oggetto studente
*/

// creazione oggetto studente con proprietà: nome, cognome e età
var student = {
    firstName: "Mario",
    lastName: "Rossi",
    age: 30,
}

console.table(student);

// stampa singole proprietà dell'oggetto con un ciclo for-in
var objectDisplay = document.getElementById("object-student");
var studentProperty = "Dati studente: ";

for (var key in student) {
    studentProperty += student[key] + " ";
}

objectDisplay.innerHTML = studentProperty;

