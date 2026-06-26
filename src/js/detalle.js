const detalle = document.getElementById("detalle");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function cargarPersonaje() {
    const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
    );

    const character = await response.json();

    detalle.innerHTML = `
    <img src="${character.image}" alt="${character.name}">

    <div class="info">

        <h2>${character.name}</h2>

        <p><span>ID:</span> ${character.id}</p>

        <p><span>Estado:</span> ${character.status}</p>

        <p><span>Especie:</span> ${character.species}</p>

        <p><span>Género:</span> ${character.gender}</p>

        <p><span>Origen:</span> ${character.origin.name}</p>

        <p><span>Ubicación:</span> ${character.location.name}</p>

    </div>
`;
}

cargarPersonaje();