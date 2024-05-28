function init() {
    let numero = document.getElementById("num").value;
    let producto;

    for (j=0; j<11; j++){  
        producto = numero * j;      
        document.getElementById("resultado").innerHTML += `${numero} * ${j} = ${producto} <br>`;
    
    }


}
