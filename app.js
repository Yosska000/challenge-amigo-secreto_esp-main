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
        amigos.push(nuevoNombre);

        //Limpiar el campo de entrada
        document.getElementById('amigo').value ='';
               
        actualizarListaAmigos();
    }     
}

//Implementa una función para actualizar la lista de amigos
function actualizarListaAmigos(){
    //Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');

    //Limpiar la lista existente
    lista.innerHTML = "";

    //Iterar sobre el arreglo
    for (let i =0; i <= amigos.length -1; i++){        
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }       

}

//Implementa una función para sortear los amigos
function sortearAmigo (){
    //Validar que haya amigos disponibles
    if (amigos.length > 0){
        //Generar un índice aleatorio
        let aleatorio = Math.floor(Math.random()*amigos.length);

        //Obtener el nombre sorteado
        let nombreSorteo = amigos[aleatorio];

        //Mostrar el resultado
        document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${nombreSorteo}`;
        
        //limpia listado de nombres ingresados
        document.getElementById('listaAmigos').innerHTML = "";
    }else{
        alert("No tienes amigos ); ");
    }
}