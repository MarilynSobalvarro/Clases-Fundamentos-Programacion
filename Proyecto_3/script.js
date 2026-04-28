// Lista estudiante
// Empieza de 0
// Pares de nombres y calificaciones
const list = ['Manuel', 54, 'Lisa', '93', 'Daniel', '97', 'Maribel', '61'];

let suma = 0;
let aprobados = [];
let reprobados = [];
let listaLetras = [];

// Recorrer lista
for (let i = 0; i < list.length; i += 2) {
    let nombreEstudiante = list[i];
    let nota = Number(list[i + 1]);

    suma += nota;

    if (nota >= 70) {
        aprobados.push(nombreEstudiante);
    } else {
        reprobados.push(nombreEstudiante)
    }
    
    let letra;

    if (nota >= 95) {
        letra = 'A';
    } else if (nota >= 90) {
        letra = 'B';
    } else if (nota >= 80) {
        letra = 'C';
    } else if (nota >= 70) {
        letra = 'D'; 
    } else {
        letra = 'F'
    }

    listaLetras.push(nombreEstudiante);
    listaLetras.push(letra);

    console.log('La calificacion de ' + nombreEstudiante + ' es ' + letra)
}

// Nota
let cantidad = list.length /  2
let promedio = (suma / cantidad).toFixed(2);

// Resultados output
console.log('El promedio de calificaciones es: ' + promedio);
console.log('Los estudiantes que aprobaron son: ' + aprobados);
console.log('Los estudiantes que no aprobaron son: ' + reprobados)
console.log('La lista transformada es: ',listaLetras)
