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

// function crearModalExtras(idModal, titulo, texto) {
//     let dialogExtra = document.createElement('dialog');
//     dialogExtra.id = idModal;

//     let h4Modal = document.createElement('h4');
//     h4Modal.textContent = titulo;

//     let pModal = document.createElement('p');
//     pModal.textContent = texto;

//     dialogExtra.append(
//         crearBotonCerrarModal(idModal),
//         h4Modal,
//         pModal
//     );

//     return dialogExtra;
// }

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

    // Tarjetas circulares y su modal
    let tarjetas = document.querySelector('#reinosBiologicos');
    let contenedorModales = document.querySelector('#reinoModales');

    // Modales de deficiones extras
    let contadorReinos = 1;

    for (let dato of datos) {
        let botonReino = document.createElement('button');
        botonReino.classList.add('infoBotonImg', 'reino', 'drop-area');
        botonReino.title = "Acceder";
        botonReino.value = `recurso${contadorReinos}`;

        // Imagen de fondo reino
        let style = document.createElement("style");
        style.innerHTML = `.reino:nth-child(${contadorReinos})::before {
            background: url("${dato.background}") center/cover no-repeat;}`;
        document.head.appendChild(style);

        let divReino = document.createElement('div');

        let h3Reino = document.createElement('h3');
        h3Reino.innerText = `${dato.item}`;

        divReino.append(h3Reino);
        botonReino.append(divReino);

        tarjetas.append(botonReino);
        contadorReinos ++;

        // Modal definicion reino
        contenedorModales.append(
            crearModalLista(botonReino.value, dato.link)
        );
    }

    // for (let dato of datos.definicionesExtras) {
    //     let modalExtraDef = crearModalExtras(
    //         dato.clave, dato.termino, dato.definicion);
    //     defExtras.append(modalExtraDef);
    //     document.querySelectorAll('button.defExtra').forEach(b => b.title = "Ver descripción");
    // }

}

// Modificación del HTML - Actividad
// async function crearActividad(datos) {
//     let contenedorDraggables = document.querySelector("#elementosActividad");
//     let contenedorModalesElementos = document.querySelector('#elementosEncontrados')

//     for (let dato of datos) {
//         let elementoDraggable = document.createElement('div');
//         elementoDraggable.classList.add(`cont${dato.elemento.replace(" ", "")}`)
        
//         let elemento = document.createElement('p');
//         elemento.textContent = dato.elemento;
//         elemento.classList.add('word');
//         elemento.draggable = true;
//         elemento.setAttribute('name', dato.reino);
        
//         let botonDescripcion = document.createElement('button');
//         botonDescripcion.textContent = "🛈";
//         botonDescripcion.title = "Ver descripción"
//         botonDescripcion.value = dato.elemento.replace(" ", "");
//         botonDescripcion.classList.add('elementoDescripcion')

//         let modalElemento = crearModalExtras(
//             dato.elemento.replace(" ", ""),
//             dato.elemento,
//             dato.descripcion
//         );

//         modalElemento.classList.add('elementoModal');
//         contenedorModalesElementos.append(modalElemento);

//         elementoDraggable.append(elemento, botonDescripcion);

//         contenedorDraggables.append(elementoDraggable);
//     }
// }


// export { crearActividad, crearIndicaciones }
export { crearIndicaciones }