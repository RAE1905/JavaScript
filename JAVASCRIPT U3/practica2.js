//operador ternario
const velocidad = 120;
let mensaje;
if (velocidad > 100) {
    mensaje= "Bajale a tu velocidad"
} else{
    mensaje = "Vas bien"
}

const Mensaje = velocidad >100 ? 'Vas muy rapido' : 'Vas bien';

console.log(mensaje);

console.log(Mensaje);

for (let i=0; i<10; i++){
    if(i==5) continue
    console.log(i);
}

//ciclo while
let i=0;
while(i<10){
    console.log(i);
    i++;
}

//Numeros pares
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

//Numeros primos
for (let i = 2; i <= 100; i++) {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        esPrimo = false;
        break;
      }
    }
    if (esPrimo) {
      console.log(i);
    }
  }