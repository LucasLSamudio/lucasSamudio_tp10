let nombre = "Tiziano";
let apellido = "Iglesias";
let edad = 27;
let numeroTelefono = 1121749531;
let isSocio = true;
let fechaPartido = "12/12/2024";
let horaPartido = "20:00";
let nroSilla = 49;
let precioBoleto = 50000;

function printTiposVariable(){
    console.log("\n----------------  MICRO DESAFIO 1 ---------------\n");
    console.log("El tipo de variable asignado a la variable 'nombre' es:\n\n"+ typeof nombre+"\n\ny su valor es: "+nombre);
    console.log("\n---------------------------------------------------------------\n");
    console.log("El tipo de variable asignado a la variable 'apellido' es:\n\n"+ typeof apellido+"\n\ny su valor es: "+apellido);
    console.log("\n---------------------------------------------------------------\n");
    console.log("El tipo de variable asignado a la variable 'edad' es:\n\n"+ typeof edad+"\n\ny su valor es: "+edad);
    console.log("\n---------------------------------------------------------------\n");
    console.log("El tipo de variable asignado a la variable 'numeroTelefono' es:\n\n"+ typeof numeroTelefono+"\n\ny su valor es: "+numeroTelefono);
    console.log("\n---------------------------------------------------------------\n");
    console.log("El tipo de variable asignado a la variable 'isSocio' es:\n\n"+ typeof isSocio+"\n\ny su valor es: "+isSocio);
    console.log("\n---------------------------------------------------------------\n");
    console.log("El tipo de variable asignado a la variable 'fechaPartido' es:\n\n"+ typeof fechaPartido+"\n\ny su valor es: "+fechaPartido);
    console.log("\n---------------------------------------------------------------\n");
    console.log("El tipo de variable asignado a la variable 'horaPartido' es:\n\n"+ typeof horaPartido+"\n\ny su valor es: "+horaPartido);
    console.log("\n---------------------------------------------------------------\n");
    console.log("El tipo de variable asignado a la variable 'nroSilla' es:\n\n"+ typeof nroSilla+"\n\ny su valor es: "+nroSilla);
    console.log("\n---------------------------------------------------------------\n");
    console.log("El tipo de variable asignado a la variable 'precioBoleto' es:\n\n"+ typeof precioBoleto+"\n\ny su valor es: "+precioBoleto);
}

module.exports = printTiposVariable;