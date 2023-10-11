function sonAnagramas(cadena1, cadena2) {
    // Eliminar espacios en blanco y convertir las cadenas a minúsculas
    cadena1 = cadena1.replace(/\s/g, '').toLowerCase();
    cadena2 = cadena2.replace(/\s/g, '').toLowerCase();
  
    // Verificar si las cadenas tienen la misma longitud
    if (cadena1.length !== cadena2.length) {
      return false;
    }
  
    // Convertir las cadenas en arreglos de caracteres, ordenarlos y compararlos
    const arregloCadena1 = cadena1.split('').sort();
    const arregloCadena2 = cadena2.split('').sort();
  
    // Comparar los arreglos resultantes
    for (let i = 0; i < cadena1.length; i++) {
      if (arregloCadena1[i] !== arregloCadena2[i]) {
        return false;
      }
    }
  
    return true;
  }function validar(){
 // Solicitar al usuario que ingrese dos cadenas
 var cadena1 = document.getElementById("cadena1").value;
 var cadena2 = document.getElementById("cadena2").value;
 
 // Verificar si las cadenas son anagramas
 if (sonAnagramas(cadena1, cadena2)) {
   alert("Las cadenas son anagramas entre sí.");
 } else {
   alert("Las cadenas no son anagramas entre sí.");
 }
 
  }
 