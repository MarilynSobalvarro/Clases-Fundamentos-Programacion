const lunes = 'lunes';
const martes = 'martes';
const miercoles = 'miercoles';
const jueves = 'jueves';
const viernes = 'viernes';
const sabado = 'sabado';
const domingo = 'domingo';

let hoy = 'miercoles';
let pregunta1 = 'hoy es lunes?'
let pregunta2 = 'hoy es miercoles?'
let pregunta3 = 'hoy es martes o miercoles?'
let pregunta4 = 'hoy es miercoles o jueves?'

console.log (pregunta1, lunes == hoy)
console.log (pregunta2, miercoles == hoy)
console.log (pregunta3, hoy == miercoles || hoy==martes)
console.log (pregunta4, hoy==miercoles && hoy==jueves)


