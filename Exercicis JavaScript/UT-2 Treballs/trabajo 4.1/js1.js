function calcula(){
    let nota;
    let result;
    nota = document.getElementById("nota1").value;
    if(nota < 4.7){ 
      result = " usted ha suspendido";
    }
    else {
      result = "usted ha aprobado";
    }

    console.log(result)
    document.getElementById("resultado").innerHTML = result
}