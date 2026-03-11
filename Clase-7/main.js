const expresion1 = 5 > 10;
console.log('Expresion1 ', expresion1);

const expresion2 = 3 < 10;
console.log('Expresion2 ', expresion2);

const expresion3 = 2 === 2;
console.log('Expresion3 ', expresion3);

const expresion4 = 3 != 3;
console.log('Expresion4 ', expresion4);


/* El operador && (AND) da True solamente si ambas expresiones son verdaderas */
// TRUE && TRUE =  TRUE
console.log('TRUE&&TRUE', expresion2 && expresion3);

// FALSE && TRUE = FALSE
console.log('FALSE&&TRUE', expresion1 && expresion3);

// TRUE && FALSE = FALSE
console.log('TRUE&&FALSE', expresion2 && expresion4);

// FALSE && FALSE = FALSE
console.log('FALSE&&FALSE', expresion1 && expresion4);


/* El operador || (OR) da True si al menos una de las expresiones es verdadera */
// TRUE || TRUE = TRUE
console.log('TRUE||TRUE', expresion2 || expresion3);

// FALSE || TRUE = TRUE
console.log('FALSE||TRUE', expresion1 || expresion3);

// TRUE || FALSE = TRUE
console.log('TRUE||FALSE', expresion2 || expresion4);

// FALSE || FALSE = FALSE
console.log('FALSE||FALSE', expresion1 || expresion4)

const age = 24;
const hasLicense = true;
function answerYes() { console.log('SI PUEDES CONDUCIR'); }

/* Puedes conducir si tienes 18 años o más y posees licencia */
age >= 18 && hasLicense && answerYes()


/*Condiciones dentro del parentesis
if (5 == 5 && 4 > 10 && 3 != 7) {
        console.log('La condicion es cierta');
} else {
    console.log('La condicion es false')
}
/*
if (5 == 5&& (4 > 10 || 3 == 7)) {
        console.log('La condicion es cierta');
} else {
    console.log('La condicion es false')
}
*/

/*
if (5 == 5&& (4 > 10 || 3 == 7)) {
        console.log('La condicion es cierta');
} else if (!(5 < 2)){
    console.log('La otra condicion es cierta');
} else {
    console.log('La condicion es false')
}
*/

const username = 'admin'; // Cualquier string
const password = '2324'; // Cualquier string
const savedPassword = '2324'; // NO CAMBIA
const userAnswer = 'Blacky'; // Cualquier string
const savedAnswer =  'Vlacky'; // NO CAMBIA

// 1. Si el user no es user234, user no existe
// 2. Si el user si es user234 y password hace match con savedPassword, acceso concedido
// 3. Si el password no hace match con savedPassword, pero los answers hacen match, acceso concedido
// 4. Si nada hace match (pasword ni answer), acceso denegado

if (username != 'admin') {
    console.log('Usuario no existe');
} else if ((username == 'admin') && (password == savedPassword)) {
    console.log('Acceso concedido');
} else if (password != savedPassword && userAnswer == savedAnswer) {
    console.log('Acceso concedido');
} else {
    console.log('Acceso denegado');
}