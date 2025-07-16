import { cargar } from "./componentes/carga.js";
import { crearIndicaciones } from "./componentes/actividad.js";
import { abrirModal } from "./componentes/modal.js";

const rutaData = './data/dataLinks.json'

// Carga de actividad
window.addEventListener("DOMContentLoaded", async function () {
    let actividad = await cargar(rutaData);
    crearIndicaciones(actividad);

    // Modales
    await abrirModal();
});