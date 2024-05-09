function calcula(){
    let nota;
    let result;
   
    nota = document.getElementById("nota1").value;

    if(nota < 0){ 
        result = "no puedes poner numeros negativos";
      }
      else if (nota <= 10) {
        result = "la nota esta dentro de los parametros"
}
    else{
        result = "no pongas notas tan altas!!!!";
    }

    console.log(result)
    document.getElementById("resultado").innerHTML = result
}