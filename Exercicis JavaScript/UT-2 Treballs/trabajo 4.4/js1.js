function suma(){
let numero1;
let numero2;

numero1 = document.getElementById("numero1").value;
numero2 = document.getElementById("numero2").value;
numero1 = Number(numero1);
numero2 = Number(numero2);

suma= numero1 + numero2

document.getElementById("resultado").innerHTML = suma



}

function resta(){
    let numero1;
    let numero2;
    
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    
    document.getElementById("resultado").innerHTML = numero1 - numero2
     
    }

function multiplicación(){
    let numero1;
    let numero2;
        
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
        
    document.getElementById("resultado").innerHTML = numero1 * numero2
    }

function division(){
    let numero1;
    let numero2;
            
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
            
    document.getElementById("resultado").innerHTML = numero1 / numero2
            
            
            }