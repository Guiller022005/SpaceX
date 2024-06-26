import { getAllRockets } from './modules/rockets.js';

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const rockets = await getAllRockets();
        if (rockets.length > 0) {
            // Mostrar nombre del cohete en header__title
            const headerTitle = document.querySelector('#header__title');
            headerTitle.innerHTML = `<h2>${rockets[0].name}</h2>`;

            // Mostrar descripción del cohete dividida en description__item
            const description = rockets[0].description;
            const descriptionItem = document.querySelector('#description__item');

            // Agregar subtítulo "Descripción"
            const subtitle = document.createElement('h3');
            subtitle.textContent = 'Descripción';
            subtitle.classList.add('rocket-subtitle'); // Añade clase rocket-subtitle si deseas aplicar estilos específicos

            // Agregar subtítulo y descripción al elemento description__item
            descriptionItem.innerHTML = ''; // Limpiar contenido existente
            descriptionItem.appendChild(subtitle); // Agregar subtítulo
            descriptionItem.insertAdjacentHTML('beforeend', `<p>${description}</p>`); // Agregar descripción
        }
    } catch (error) {
        console.error("Error fetching rocket data:", error);
    }
});

