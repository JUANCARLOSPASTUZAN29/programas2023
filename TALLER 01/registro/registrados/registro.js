function registro(){
     
      let usuario=document.getElementById("usuario").value
     let  p1=document.getElementById("Contraseña").value
      let p2=document.getElementById("veri").value


    if (p1 === p2){
      if(validarContrasena(p2)){
        alert("La contraseña es válida.");
      }else{
        alert("La contraseña no cumple con los criterios requeridos.");
      }
    }else if(p1==="" && p2==="" ){
      
       
    }else{
      alert("las contraseñas no coinciden")
    }
//     if(){

//     }{
//       alert("estan fuera del rango")
//     }
// }
 

 }
 function validarContrasena(contrasena) {
  // Verificar si la contraseña tiene al menos 8 caracteres
  if (contrasena.length < 8) {
    return false;
  }

  // Verificar si la contraseña contiene al menos una letra mayúscula
  if (!/[A-Z]/.test(contrasena)) {
    return false;
  }

  // Verificar si la contraseña contiene al menos un número
  if (!/\d/.test(contrasena)) {
    return false;
  }

  // Verificar si la contraseña no contiene espacios en blanco
  if (/\s/.test(contrasena)) {
    return false;
  }

  return true;
}

// Solicitar al usuario que ingrese una contraseña
 

// Validar la contraseña
 
