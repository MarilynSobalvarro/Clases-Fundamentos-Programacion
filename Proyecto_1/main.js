// Precio del tiquete de entrada a un museo

let age = 65
let hascoupon = true
let couponDiscount = 0.41;
let hasStudentId = true

let tiquetePrecioBase = 5000;

if (age <= 12) {
    console.log('El precio de su tiquete es: ' + (tiquetePrecioBase = 'Gratis'));
} else if (age > 65 && hascoupon && couponDiscount > 0.40) {
    console.log(tiquetePrecioBase - (tiquetePrecioBase * couponDiscount));
} else if (hasStudentId && hascoupon && couponDiscount > 0.25) {
    console.log(tiquetePrecioBase - (tiquetePrecioBase * couponDiscount));
} else if (age >= 65) {
    console.log(tiquetePrecioBase - (tiquetePrecioBase * 0.40));
} else if (hasStudentId) { 
    console.log(tiquetePrecioBase - (tiquetePrecioBase * 0.25));
} else {
    console.log(tiquetePrecioBase);
}





