// Ejercicio 1

let numero = 579643
let copiaNumero = numero
let suma = 0;

while (numero > 0) {
    let digito = numero % 10;
    suma = suma + digito;
    numero = Math.floor(numero / 10);
}

console.log(`La suma de los dígitos del numero ${copiaNumero} es ${suma}`);

// Ejercicio 2

let palabra = "brujula"

const vocales = "aeiou";
let totalVocales = 0;
let vocalesUnicas = "";

for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];

    if(vocales.includes(letra)) {
        totalVocales++;

        if (!vocalesUnicas.includes(letra)) {
            vocalesUnicas = vocalesUnicas + letra;
        }
    }
}

let vocalesUnicasTotal = vocalesUnicas.length;

console.log(`La palabra ${palabra} tiene ${totalVocales} vocales totales y ${vocalesUnicasTotal} vocales únicas`);


