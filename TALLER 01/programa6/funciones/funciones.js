function contar(){
    let frase=document.getElementById("frase").value;
     let contar=frase.split(" ")
     let contador=0
     console.log('contar :>> ', contar);
     for(let i=0;i<contar.length;i++){
           contador++
     }
     if(contador>0){
       document.getElementById("contar").innerHTML+="en la frase hay  >>"+contador+"<< palabras"
     
    
     }
   
}
function invertir(){
     let cadena=document.getElementById("cadena").value;
     let  spl=cadena.split(" ");
     let invertir=spl.reverse()
     console.log(invertir);
     document.getElementById("invertir").innerHTML+=invertir
}
function frutas(){
    const frutas=["manzana","papaya","pera","banana"]
    let cadena=document.getElementById("cadena1").value
    let arreglo=cadena.split("-")
    
    for (let i=0;i<arreglo.length;i++){
        if (frutas.includes(arreglo[i])){

           document.getElementById("fruta").innerHTML+="estan    ->>"+arreglo[i]+"<br>"
    }
     


    }  }
 