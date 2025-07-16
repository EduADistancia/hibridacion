import { cargar } from "./componentes/carga.js";
import { crearIndicaciones } from "./componentes/actividad.js";
import { abrirModal } from "./componentes/modal.js";

// Ruta del cuestionario
const rutaData = './data/dataLinks.json'

// Carga de actividad
window.addEventListener("DOMContentLoaded", async function () {
    // Actividad: elementos d'n'd
    let actividad = await cargar(rutaData);
    crearIndicaciones(actividad);

    // Modales
    await abrirModal();
});