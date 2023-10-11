function reemplazarVocales() {
    let cadena = document.getElementById("cadena1").value;
    let caracter="%"
    // Usamos una expresión regular para buscar todas las vocales (mayúsculas y minúsculas)
    // en la cadena y las reemplazamos con el carácter especificado.
    var nuevaCadena = cadena.replace(/[aeiouAEIOU]/g, caracter);
    return document.getElementById("remplazado").innerHTML+="se su remplazo fue un exito"+"<br>"+nuevaCadena;
  }
 
  