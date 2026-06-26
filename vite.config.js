import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        personajes: resolve(__dirname, "personajes.html"),
        busqueda: resolve(__dirname, "busqueda.html"),
        detalle: resolve(__dirname, "detalle.html"),
      },
    },
  },
});