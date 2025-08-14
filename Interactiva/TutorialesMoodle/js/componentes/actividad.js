// Creación de modales
function crearModalLista(idModal, link) {
    let dialogReino = document.createElement('dialog');
    dialogReino.id = idModal;
    
    let botoneraModal = document.createElement('div');
    botoneraModal.classList.add('cerrarModal');
    botoneraModal.append(crearBotonCerrarModal(idModal));
    
    let divIframe = document.createElement('div');
    divIframe.innerHTML = `${link}`;
    dialogReino.append(botoneraModal, divIframe);

    return dialogReino;
}

// Cierre de modal
function crearBotonCerrarModal(idModal) {
    let cerrarDialog = document.createElement('button');
    cerrarDialog.innerText = "x";
    cerrarDialog.title = "Cerrar";
    cerrarDialog.id = `cerrar${idModal}`;
    let divCerrar =  document.createElement('div');
    divCerrar.classList.add('cerrarModal');
    divCerrar.append(cerrarDialog);

    return divCerrar;
}

// Modificación del HTML - Indicaciones
async function crearIndicaciones(datos) {
    let tarjetas = document.querySelector('#reinosBiologicos');
    let contenedorModales = document.querySelector('#reinoModales');
    let contadorReinos = 1;

    for (let dato of datos) {
        let botonReino = document.createElement('button');
        botonReino.classList.add('infoBotonImg', 'reino', 'drop-area');
        botonReino.title = "Acceder";
        botonReino.value = `recurso${contadorReinos}`;

        // ⬇️ Fondo como un <div> interno, no ::before
        let fondoReino = document.createElement('div');
        fondoReino.classList.add('fondoReino');
        fondoReino.style.background = `url("${dato.background}") center/cover no-repeat`;
        fondoReino.style.position = 'absolute';
        fondoReino.style.top = 0;
        fondoReino.style.left = 0;
        fondoReino.style.width = '100%';
        fondoReino.style.height = '100%';
        fondoReino.style.pointerEvents = 'none';

        // Contenido textual
        let h3Reino = document.createElement('h3');
        h3Reino.innerText = dato.item;
        fondoReino.append(h3Reino);

        // Armar botón
        botonReino.appendChild(fondoReino);

        tarjetas.appendChild(botonReino);

        // Modal
        contenedorModales.appendChild(
            crearModalLista(botonReino.value, dato.link)
        );

        contadorReinos++;
    }
}
export { crearIndicaciones }