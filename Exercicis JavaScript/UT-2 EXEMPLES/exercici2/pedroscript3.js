let preu = 102
let persones = 7
let result = preu / persones



console.log("la division vale " + result.toFixed((2)))
document.getElementById("resultats").innerHTML = "El sopar li costa a cada amic " + result.toFixed((2)) + " €";