function calcula(){

    let dia;
    let mes;

    dia = document.getElementById("dia").value;
    mes = document.getElementById("mes").value;

    if(mes==4 || mes==5  || mes == 3 && dia>20 || mes ==6 && dia<22 ){
        result = "agustin primaveral";
    }

    else if (mes==7 || mes==8  || mes == 6 && dia>21 || mes ==9 && dia<24){
    result = "pedro en bañador"
    }

    else if(mes==10 || mes==11  ||mes == 9 && dia>23 || mes ==12 && dia<20){
    result = "santi cocinando hojas para comer"

    }
    
    else{
    result = "Tareq bomba congelada"

    }

    console.log(dia + mes)
    document.getElementById("resultado").innerHTML = result
    


}

