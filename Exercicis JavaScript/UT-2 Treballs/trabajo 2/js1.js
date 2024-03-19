function calcula(){
    let total = document.getElementById("total").value
   
    let comensales = document.getElementById("comensales").value

    let divisio =(total / comensales);
//value para que lea lo que hay dentro del cuadro//
document.getElementById("texto").innerHTML= `teneis que pagar ${divisio.toFixed((2))} € por cada dni`
}