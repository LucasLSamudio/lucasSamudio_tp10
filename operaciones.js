function calculadora(){
    let nro1 = 25;
    let nro2 = 10;
    let suma = nro1 + nro2;
    let resta = nro1 - nro2;
    let multiplicacion = nro1 * nro2;
    let division = nro1 / nro2;
    let modulo = nro1 % nro2;
    let isPrimeroMayor = Boolean;
    let isPrimeroMenor = Boolean;

    if (nro1 > nro2){
        isPrimeroMayor = true;
    }
    else{
        if (nro1 < nro2){
            isPrimeroMayor = false;
        }
        else{
            isPrimeroMayor = null;
        }
    }
    if (nro1 < nro2){
        isPrimeroMenor = true;
    }
    else{
        if (nro1 > nro2){
            isPrimeroMenor = false;
        }
        else{
            isPrimeroMenor = null;
        }
    }
    console.log("\n--------------------------- MICRO DESAFÍO EXTRA -----------------------------\n")
    console.log("El valor de la operación suma entre "+nro1+" y "+nro2+" es: "+suma)
    console.log("El valor de la operación resta entre "+nro1+" y "+nro2+" es: "+resta)
    console.log("El valor de la operación multiplicación entre "+nro1+" y "+nro2+" es: "+multiplicacion)
    console.log("El valor de la operación división entre "+nro1+" y "+nro2+" es: "+division)
    console.log("El valor de la operación módulo de "+nro1+" y "+nro2+" es: "+modulo)
    if (isPrimeroMayor){ // Si el valor de isPrimeroMayor es igual a true, entra en el if, sino pasa al else.
        console.log("El primer número ES mayor.")
    }
    else{
        console.log("El primer número NO ES mayor o es igual o es igual al segundo número.")
    }
    if (isPrimeroMenor){
        console.log("El primer número ES menor.")
    }
    else{
        console.log("El primer número NO ES menor o es igual al segundo número.")
    }
}

module.exports = calculadora;