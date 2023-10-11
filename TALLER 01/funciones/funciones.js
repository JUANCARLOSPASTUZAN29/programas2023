
let  lista_parrafo ={
        palabras:[],
    agregar_parrafo:function(parrafo){
        this.palabras.push(parrafo)
        document.getElementById("resultado").innerHTML+="<br>"+this.palabras
  //   
        },
      
  
 }

 

function parrafo(){
     const parrafo=document.getElementById("parrafo").value;

     console.log(parrafo.replace(",.-_/()=?¡¿[{]}?'",""))
       let separar=parrafo.split(" ")
       let cont =0
          console.log(separar);
       for(let i=0;i<separar.length;i++){
            if (separar[0]===separar[i+1]){
               
            }else{
              cont++
            }
       }

       if(cont>1){
           let unicas=cont
           console.log("unicas"+cont);
           document.getElementById("resultado").innerHTML+=unicas+"\n <b>Unicas</b>";
       }
      lista_parrafo.agregar_parrafo(separar)

}
function unicas(){
lista_parrafo.palabras_unicas
} 
    