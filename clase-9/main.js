/* 
WHILE

let conditionNumber = 10;
while (conditionNumber > 0) {
    // codigo que quiero ejecutar en cada iteracion
    conditionNumber = conditionNumber - 1;
} 

FOR 

for(let number = 0; number < 10; number++) {
    let scopedVariable = 10;
    // codigo que quiero ejecutar en cada iteracion
    console.log("Mi codigo se ejecuto", number);
}


TABLA DE MULTIPLICAR

let tablaDeMultiplicar = 3;
for(let number = 1; number < 11; number++) {
    // codigo que quiero ejecutar en cada iteracion
    let resultado = tablaDeMultiplicar * number; 
    console.log(tablaDeMultiplicar + " x " + number + " = " + resultado )
}
*/

// Practica 1 
// la palabra $(word) SI es un palindromo
// la palabra $(word) NO es un palindromo

/*
let word = "comer"
let wordReversed = "";

for(let letras = 5; letras >= 0; letras--) {
    wordReversed = wordReversed + word[letras]
    console.log(`La palabra ${wordReversed} NO es un palindromo`)
}
*/

let word = "reconocer";
let wordReversed = "";
let cantidadDeLetras = word.length;

for(let letra = cantidadDeLetras; letra >= 0; letra--) {
    wordReversed = wordReversed + word.charAt(letra)
}
    console.log(wordReversed)