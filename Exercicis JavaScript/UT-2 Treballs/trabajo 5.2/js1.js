function init_maxim(){
    //leer valores del formulario//
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    a = Number(a);
    b = Number(b);
    //llamada a función Mitjana//
    let r = maxim(a,b);
    //mostrar resultador por pantalla//
    document.getElementById("resultado").innerHTML = r
}
//transformar parametros a numeros
function maxim (num1, num2){


if(num1 > num2){
let calculo = num1
return calculo;

    }

else(num1 < num2);{
let calculo = num2
return calculo;

}

}