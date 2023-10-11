function transformar(){
    let cadena=document.getElementById("cadena1").value
    let nuevoMayus=cadena.toUpperCase()
    let nuevoMinus=cadena.toLowerCase()
   return document.getElementById("trans").innerHTML+="MAYUSCULAS <br>"+nuevoMayus+"<br>"+"minusculas <br>"+nuevoMinus
}
function cont_orac(){
    let cadena=document.getElementById("cadena2").value
    let palabras=cadena.split(" ")
    let contador=0
   
    for (var i = 0; i < palabras.length; i++) {
        document.getElementById("contao").innerHTML+=`La palabra '${palabras[i]}' tiene ${palabras[i].length} caracteres. <br>`;
    }
   
    
}
function duplicarnumero(){
    let numeros=[]
    let tamaño=parseFloat(document.getElementById("tamaño").value)
    console.log(tamaño);
    for(let i=0;i<tamaño;i++){
       numeros.push(Math.floor(Math.random()*tamaño)+1)
       
    }
    const multiplicados=numeros.map(numero => numero *2)
    document.getElementById("original").innerHTML+="array original:>>"+numeros
    document.getElementById("duplicado").innerHTML+="array duplicado:>>"+multiplicados
console.log(numeros);
}
function ultimo(){
    // Definir un array de palabras
const palabras = ["Hola", "Mundo", "JavaScript", "juanP"];

// Utilizar la función map para modificar las palabras
const palabrasModificadas = palabras.map(palabra => {
  return palabra.split('').map(caracter => {
    if (caracter === caracter.toUpperCase()) {
      return caracter.toLowerCase();
    } else {
      return caracter.toUpperCase();
    }
  }).join('');
});

document.getElementById("imprimir1").innerHTML+="<b>original</b> <br>"+palabras
// Mostrar la lista de palabras modificadas
  document.getElementById("imprimir").innerHTML+="<b>modificadas</b> <br>"+palabrasModificadas

}