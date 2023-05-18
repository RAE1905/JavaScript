var x = 'Bienvenido "Ramón" :)'
var y = 'Bienvenido "Ramón 2" :)'

console.log(x)
console.log(y)

var a = 12;
var b = 3;
var c = 13;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(a + b * c);
console.log((a + b) * c);
console.log(b / a * c);


const tiempo =25;
let saludo
if (tiempo<12) {
    saludo= "Buenos dias"
} else if(tiempo>=12 && tiempo<=19){
    saludo="Buenas tardes"
} else if (tiempo>19 && tiempo<=24){
    saludo="Buenas noches"
} else if (tiempo>24){
    saludo="Esta hora no existe"
}

console.log(saludo);

// ---------------------------------------------------------------------------------------------------------------------------------

const dia = 1;
let texto;
switch (dia) {
    case 0:
        texto="Domingo";
        break;
    case 1:
        texto="Lunes";
        break;
    case 2:
        texto="Martes";
        break;
    case 3:
        texto="Miercoles";
        break;
    case 4:
        texto="Jueves";
        break;
    case 5:
        texto="Viernes";
        break;
    case 6:
        texto="Sabado";
        break;
    default:
        texto = "Dia no valido"
}

console.log(texto);