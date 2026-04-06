// Proyecto 2 - Cajero

let cantidadDeClientes = 25;
let totalSegundos = 0;

for (let i = 1; i <=cantidadDeClientes; i++) {
    if(i % 2 === 0) {
        totalSegundos += (i * 60) + 45;
    } else { 
        totalSegundos += 20;
    }

    if (i % 10 === 0) {
    totalSegundos += (18 * 60 ) + 11
    } else if (i % 5 ===  0) {
        totalSegundos += (37 * 60)
    }
}


let horas = Math.floor(totalSegundos / 3600)
let minutos = Math.floor((totalSegundos % 3600) / 60)
let segundos = totalSegundos % 60;

if (horas > 0) {
    console.log('A el cajero le va a tomar ' + horas + ' horas ' + minutos + ' minutos y ' + segundos + ' segundos ')
} else if (minutos > 0) { 
    console.log('A el cajero le va a tomar ' + minutos + ' minutos y ' + segundos + ' segundos ')
} else {
    console.log('A el cajero le va a tomar ' + segundos + ' segundos ')
} 