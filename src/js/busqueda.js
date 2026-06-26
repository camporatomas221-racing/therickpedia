const charactersEl = document.getElementById("characters");

const params = new URLSearchParams(window.location.search);

const name = params.get("name") || "";

let pagina = 1;

async function buscar(){

    const data = await obtenerPersonajes(

        `${API}?page=${pagina}&name=${encodeURIComponent(name)}`

    );

    if(data.error){

        charactersEl.innerHTML =
        "<h2>No se encontraron personajes.</h2>";

        return;

    }

    mostrarPersonajes(
        charactersEl,
        data.results
    );

    actualizarPaginacion(data,pagina);

}

document.getElementById("siguiente").addEventListener("click",()=>{

    pagina++;

    buscar();

});

document.getElementById("anterior").addEventListener("click",()=>{

    if(pagina>1){

        pagina--;

        buscar();

    }

});

buscar();