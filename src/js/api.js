const API = "https://rickandmortyapi.com/api/character";

async function obtenerPersonajes(url) {

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error al obtener datos");
        }

        return await response.json();

    } catch (error) {

        return {
            error: true
        };

    }

}

async function obtenerDestacados() {

    const destacados = [
        1,2,3,4,5,
        118,285,667,47,
        244,242,331,672,
        196,372,306,347,
        180,103,265
    ];

    return await obtenerPersonajes(
        `${API}/${destacados.join(",")}`
    );

}

function mostrarPersonajes(contenedor, personajes) {

    contenedor.innerHTML = "";

    personajes.forEach(character => {

        const card = document.createElement("div");

        card.classList.add("character-card");

        card.innerHTML = `
            <img src="${character.image}">
            <h3>${character.name}</h3>
            <p>Especie: ${character.species}</p>
            <p>Estado: ${character.status}</p>
        `;

        card.addEventListener("click", () => {

            window.location.href =
                `detalle.html?id=${character.id}`;

        });

        contenedor.appendChild(card);

    });

}

function actualizarPaginacion(data,pagina){

    document.getElementById("numero-pagina").textContent =
    `Página ${pagina} de ${data.info.pages}`;

    document.getElementById("anterior").disabled =
    !data.info.prev;

    document.getElementById("siguiente").disabled =
    !data.info.next;

}