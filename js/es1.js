/*
ES 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto.
*/

// ESERCIZIO 1
/*
1- creare oggetto studente
2- stampare tutte le proprietà dell'oggetto studente
*/

// creazione oggetto studente con proprietà: nome, cognome e età
var student = {
    firstName: "Marco",
    lastName: "Marroni",
    age: 18,
};

console.table(student);

// stampa singole proprietà dell'oggetto con un ciclo for-in
var objectDisplay = document.getElementById("object-student");
var studentProperty = "Dati studente: ";

for (var key in student) {
    studentProperty += student[key] + " ";
}

objectDisplay.innerHTML = studentProperty;

