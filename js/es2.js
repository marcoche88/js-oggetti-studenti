/*
ES 2
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(),
di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*/

// ESERCIZIO 2
/*
1- creare array di oggetti studente
2- stampare per ogni studente nome e cognome
3- chiedere all'utente di inserire nome, cognome e età di un nuovo studente
4- aggiungere il nuovo studente all'array
*/

// creazione array di oggetti studente
var students = [
    {
        firstName: "Mario",
        lastName: "Rossi",
        age: 30,
    },
    {
        firstName: "Luca",
        lastName: "Bianchi",
        age: 21,
    },
    {
        firstName: "Anna",
        lastName: "Verdi",
        age: 37,
    }
];

console.table(students);

// stampa per ogni studente dell'array nome e cognome
var arrayDisplay = document.getElementById("array-students");
var studentsData = "";

for (var i = 0; i < students.length; i++) {
    var currentObject = students[i];
    studentsData += currentObject.firstName + " " + currentObject.lastName + "<br>";
}

arrayDisplay.innerHTML = studentsData;

// chiede all'utente di inserire i dati di un nuovo studente (nome cognome e età)
var userName = prompt("Inserisci nome studente", "Maria");
var userSurname = prompt("inserisci cognome studente", "Gialli");
var userAge = parseInt(prompt("inserisci età studente", "43"));

// crea nuovo oggetto studente
var newStudent = {};
newStudent.firstName = userName;
newStudent.lastName = userSurname;
newStudent.age = userAge;

// aggiunge nuovo oggetto studente all'array degli studenti
students.push(newStudent);
console.table(students);

