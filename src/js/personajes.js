const charactersEl = document.getElementById("characters");
const nameFilter = document.getElementById("name-filter");
const statusFilter = document.getElementById("status-filter");
const orderFilter = document.getElementById("order-filter");

let pagina = 1;

async function cargarPersonajes() {

    let url = `https://rickandmortyapi.com/api/character?page=${pagina}`;

    if (nameFilter.value.trim() !== "") {
        url += `&name=${encodeURIComponent(nameFilter.value.trim())}`;
    }

    if (statusFilter.value !== "") {
        url += `&status=${statusFilter.value}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    charactersEl.innerHTML = "";

    if (data.error) {

        charactersEl.innerHTML = `
            <h2>No se encontraron personajes.</h2>
        `;

        document.getElementById("numero-pagina").textContent = "";

        return;
    }

    let personajes = data.results;

    if (orderFilter.value === "az") {

        personajes.sort((a, b) =>
            a.name.localeCompare(b.name)
        );

    }

    if (orderFilter.value === "za") {

        personajes.sort((a, b) =>
            b.name.localeCompare(a.name)
        );

    }

    mostrar(personajes);

    document.getElementById("numero-pagina").textContent =
        `Página ${pagina} de ${data.info.pages}`;

    document.getElementById("anterior").disabled =
        !data.info.prev;

    document.getElementById("siguiente").disabled =
        !data.info.next;

}

function mostrar(personajes) {

    charactersEl.innerHTML = "";

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

        charactersEl.appendChild(card);

    });

}

nameFilter.addEventListener("input", () => {

    pagina = 1;
    cargarPersonajes();

});

statusFilter.addEventListener("change", () => {

    pagina = 1;
    cargarPersonajes();

});

orderFilter.addEventListener("change", () => {

    pagina = 1;
    cargarPersonajes();

});

document.getElementById("siguiente").addEventListener("click", () => {

    pagina++;
    cargarPersonajes();

});

document.getElementById("anterior").addEventListener("click", () => {

    if (pagina > 1) {

        pagina--;
        cargarPersonajes();

    }

});

cargarPersonajes();