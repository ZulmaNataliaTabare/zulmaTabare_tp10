

// código para calcular el nuevo sueldo a un trabajador


let nombre = "Jorge";

let apellido = "Aravena";

let sueldoActual = 250000;

let porcentajeAumento = 15; 

let calculoAumento = (sueldoActual * porcentajeAumento)/100;

let nuevoSueldo = sueldoActual+calculoAumento;

console.log(`Hola, estimado  ${nombre} ${apellido}
En base a su sueldo actual: $${sueldoActual}
Ha recibido un aumento del 25%: $${calculoAumento}
y su nuevo sueldo es de: $${nuevoSueldo}`);
