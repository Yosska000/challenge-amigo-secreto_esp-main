// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//declarando una variable de tipo array
let amigos=[];

function agregarAmigo(){
   
    //Capturar el valor del campo de entrada
    let nuevoNombre =document.getElementById('amigo').value;

    //Validar la entrada
    if (nuevoNombre == ''){
        alert("Por favor inserte un nombre");
    }else{
        //Actualizar el array de amigos
        nombres.push(nuevoNombre);

        //Limpiar el campo de entrada
        document.getElementById('amigo').value ='';
                
    }     
}
