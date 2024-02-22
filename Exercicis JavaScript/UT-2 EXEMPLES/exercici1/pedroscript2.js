let x = 15
let y = 25
let z = x * y
let result = x + y
let w = "empanadas"
let result2 = x - z
let result3 = x * z
let result4 = x / y
let result5 = x ** y




document.getElementById("resultats").innerHTML = "la suma vale " + result;
document.getElementById("resultats2").innerHTML = "la resta vale " + result2;
document.getElementById("resultats3").innerHTML = "la multiplicación vale " + result3;
document.getElementById("resultats4").innerHTML = "la división vale " + result4;
document.getElementById("resultats5").innerHTML = "la potencia vale " + result5;

x++;
result = x
document.getElementById("resultats6").innerHTML = "el numero incrementa de 15 a " + x;


x--;
result = x
document.getElementById("resultats7").innerHTML = "el numero decrementa de 16 a " + x;

