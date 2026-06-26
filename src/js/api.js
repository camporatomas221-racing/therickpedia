export const API = "https://rickandmortyapi.com/api/character";

export async function obtenerPersonajes(url) {

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

export async function obtenerDestacados() {

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
