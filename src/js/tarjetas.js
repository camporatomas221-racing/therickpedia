function crearTarjeta(character){

    const card = document.createElement("div");

    card.className = "character-card";

    card.innerHTML = `
        <img src="${character.image}">
        <h3>${character.name}</h3>
        <p>Especie: ${character.species}</p>
        <p>Estado: ${character.status}</p>
    `;

    card.addEventListener("click",()=>{

        window.location.href=
        `detalle.html?id=${character.id}`;

    });

    return card;

}

function mostrarPersonajes(contenedor,personajes){

    contenedor.innerHTML="";

    personajes.forEach(character=>{

        contenedor.appendChild(
            crearTarjeta(character)
        );

    });

}

function actualizarPaginacion(data,pagina){

    document.getElementById("numero-pagina").textContent=
        `Página ${pagina} de ${data.info.pages}`;

    document.getElementById("anterior").disabled=
        !data.info.prev;

    document.getElementById("siguiente").disabled=
        !data.info.next;

}