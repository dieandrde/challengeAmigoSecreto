// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim(); //valor sin espacios

    //primera validación: nombre vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // convierte el nombre a minúsculas
    let nombreNormalizado = nombre.toLowerCase(); 

    //segunda validación: nombre repetido
    if (amigos.some(amigo => amigo.toLowerCase() === nombreNormalizado)){ //.some revisa cada elemento de amigos
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; //limpia el input
    //console.log(amigos)

    agregarLista();
}

function agregarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++ ) {
        let li = document.createElement("li");
        li.textContent = amigos[i]; //agrega los nombres al li
        lista.appendChild(li);
    }

}





function sortearAmigo() {
   if (amigos.length === 0) {
    alert("Agrega al menos un amigo antes de realizar el sorteo");
    return;
   }

   let indiceAleatorio = Math.floor(Math.random() * amigos.length) //genera un índice aleatorio
   let amigoSorteado = amigos[indiceAleatorio]; //amigoSorteado representa el indice sorteado dentro de la lista amigos

   let resultado = document.getElementById("resultado"); //resultado es un <ul> en el html
   resultado.innerHTML = `¡El amigo secreto es <li>${amigoSorteado}!</li>`; // muestra el nombre en la lista de resultados

    //sonido al sortear
    let audio = new Audio("assets/sound.mp3");
    audio.play();
}