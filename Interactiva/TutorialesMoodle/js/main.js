import { cargar } from "./componentes/carga.js";
import { crearIndicaciones } from "./componentes/actividad.js";
import { abrirModal } from "./componentes/modal.js";

const rutaData = './data/data.json'

// Carga de actividad
window.addEventListener("DOMContentLoaded", async function () {
    let actividad = await cargar(rutaData);
    crearIndicaciones(actividad);

    // Modales
    await abrirModal();
});

// Filtrar botones por texto
const filterInput = document.getElementById("videoFilter");
filterInput.addEventListener('input', () => {
    const search = filterInput.value.toLowerCase();

    document.querySelectorAll('#reinosBiologicos button').forEach(btn => {
        const text = btn.textContent.toLowerCase();
        btn.style.display = text.includes(search) ? '' : 'none';
    });
});