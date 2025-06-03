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
        contenedor.innerHTML = '<p> Párrafo insertado y creado desde JS</p>';
    }
});

crearElementoBtn.addEventListener('click', function() {
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = 'Este es un párrafo creado dinámicamente';
    nuevoParrafo.style.color = 'purple';
    nuevoParrafo.style.fontWeight = 'bold';
    contenedor.appendChild(nuevoParrafo);
    console.log('Nuevo párrafo creado y añadido al contenedor');
});