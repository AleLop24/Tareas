const contenedor = document.getElementById('contenedorDinamico');
const cambiarContenidoBtn = document.getElementById('cambiarContenidoBtn');
const crearElementoBtn = document.getElementById('crearElementoBtn');
const cambiarEstiloBtn = document.getElementById('cambiarEstiloBtn');

cambiarContenidoBtn.addEventListener('click', function() {
    const parrafo = contenedor.querySelector('p');
    if (parrafo) {
        parrafo.textContent = 'El contenido de este párrafo ha sido modificado';
        console.log('Contenido de párrafo cambiado');
    } else {
        contenedor.innerHTML = '<p class="parrafo-dinamico">Párrafo insertado y creado desde JS</p>';
    }
});

// Solo un listener para crear elementos
crearElementoBtn.addEventListener('click', function() {
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = 'Este es un párrafo creado dinámicamente';
    nuevoParrafo.classList.add('parrafo-dinamico');
    // Si el primer párrafo tiene el estilo resaltado, también lo agregamos al nuevo
    const primerParrafo = contenedor.querySelector('p');
    if (primerParrafo && primerParrafo.classList.contains('resaltado-parrafo')) {
        nuevoParrafo.classList.add('resaltado-parrafo');
    }
    contenedor.appendChild(nuevoParrafo);
    console.log('Nuevo párrafo creado y añadido al contenedor');
});

// Alternar el estilo resaltado en todos los párrafos
cambiarEstiloBtn.addEventListener('click', function() {
    const parrafos = contenedor.querySelectorAll('p');
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle('resaltado-parrafo');
    });
    console.log('Estilo de párrafo alternado');
});