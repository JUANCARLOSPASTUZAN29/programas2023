function enviar(){
    const clave=document.getElementById("clave").value
    let cadena=document.getElementById("cadena").value
    let cadena1
      cadena1=cadena.split(" ")
    
    for(let i=0;i<cadena1.length;i++){
        if(cadena1[i]==clave){
             document.getElementById("cadena2").innerHTML+= "tu palabra clave es ::>"+clave
        }
    }
    

    console.log(cadena1);
}