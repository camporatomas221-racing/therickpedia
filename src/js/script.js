const charactersEl = document.getElementById("characters");
const nameFilterEl = document.getElementById("name-filter");

let allCharacters = [];
let currentIndex = 0;

const cardsPerPage = 5;

async function cargarDestacados(){

    allCharacters = await obtenerDestacados();

    renderizar();

}

function renderizar(){

    const visibles = allCharacters.slice(
        currentIndex,
        currentIndex + cardsPerPage
    );

    mostrarPersonajes(
        charactersEl,
        visibles
    );

}

document.getElementById("next").addEventListener("click",()=>{

    if(currentIndex + cardsPerPage < allCharacters.length){

        currentIndex += cardsPerPage;

        renderizar();

    }

});

document.getElementById("prev").addEventListener("click",()=>{

    if(currentIndex >= cardsPerPage){

        currentIndex -= cardsPerPage;

        renderizar();

    }

});

function irABusqueda(){

    const nombre = nameFilterEl.value.trim();

    if(nombre==="") return;

    window.location.href=
    `busqueda.html?name=${encodeURIComponent(nombre)}`;

}

nameFilterEl.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        irABusqueda();

    }

});

cargarDestacados();