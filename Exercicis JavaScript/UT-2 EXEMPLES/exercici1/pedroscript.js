let x = 15
let y = 25
let z = x * y
let result = x + y
let w = "empanadas"
let result2 = w + z




//****************************1.1 salida por consola*******************/
//**********************************suma**************************** */

console.log("la suma vale " + result)
//si es suma de unos elemenots el + vale para sumar y si no es suma vale para juntar elementos

console.log(`la suma vale ${result}`)

console.log(z)

console.log("la segunda suma vale " + result2)

//*****************************RESTA*******************************/
//result declarada no neccesario volver a declarlo//
result = x - y

console.log("la resta vale " + result)

//*****************************MULTIPLICACION*******************************/
//result declarada no neccesario volver a declarlo//
result = x * y

console.log("la multiplicacion vale " + result)

//*****************************POTENCIA*******************************/
//result declarada no neccesario volver a declarlo//
result = x ** y

console.log(x + " elevado a "+ y + " vale " + result)

//*****************************DIVISION*******************************/
//result declarada no neccesario volver a declarlo//
result = x / y

console.log("la division vale " + result)

//nota x=15 y=25/
//*********************************Post-Incremento*********************************/
x++;
result = x;

console.log ("el numero incrementa de 15 a " + result)

//*********************************Post-Decremento*********************************/

x--;
result = x;

console.log ("el numero decrementa de 16 a " + result)

//***********************1.2 Salida en document.write ****************************/

result = x + y

document.write("la suma vale " + result)

//***************1.2 Salida en document.getelementbyid****************************/

document.getElementById("resultats").innerHTML = "la suma vale " + result;