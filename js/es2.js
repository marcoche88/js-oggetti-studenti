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
2- chiedere all'utente di inserire nome, cognome e età di un nuovo studente
3- aggiungere il nuovo studente all'array
4- stampare per ogni studente nome e cognome
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

// variabili
var userName = document.getElementById("name");
var userSurname = document.getElementById("surname");
var userAge = document.getElementById("age");
var arrayDisplay = document.getElementById("array-students");
var button = document.getElementById("button-student");

// prendere i dati del nuovo studente al click del bottone (BONUS)
button.addEventListener("click", function () {
    // creare nuovo oggetto studente e inserire valori degli input
    var newStudent = {};
    var userNameValue = userName.value;
    var userSurnameValue = userSurname.value;
    var userAgeValue = userAge.value;

    // validazione input, se non valido resetta valori input e interrompe la funzione
    if (!userNameValue || userNameValue.trim() === "" || !userSurnameValue || userSurnameValue.trim() === "") {
        alert("Valori non validi");
        userName.value = "";
        userSurname.value = "";
        userAge.value = "18";
        return;
    }

    // inserire valori input nell'oggetto nuovo studente
    newStudent.firstName = userNameValue;
    newStudent.lastName = userSurnameValue;
    newStudent.age = parseInt(userAgeValue);

    // aggiungere nuovo oggetto studente all'array degli studenti
    students.push(newStudent);
    console.table(students);

    // stampare per ogni studente dell'array nome e cognome
    var studentsData = "";

    for (var i = 0; i < students.length; i++) {
        var currentObject = students[i];
        studentsData += currentObject.firstName + " " + currentObject.lastName + "<br>";
    }

    arrayDisplay.innerHTML = studentsData;

    // resettare valori degli input
    userName.value = "";
    userSurname.value = "";
    userAge.value = "18";
})








