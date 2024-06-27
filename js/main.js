import { getAllRockets } from './modules/rockets.js';
import { paginationRockets } from './components/pagination.js'; 

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const rockets = await getAllRockets();
        if (rockets.length > 0) {
            
            const headerTitle = document.querySelector('#header__title');
            headerTitle.innerHTML = `<h2>${rockets[0].name}</h2>`;


            const description = rockets[0].description;
            const descriptionItem = document.querySelector('#description__item');

            
            const subtitle = document.createElement('h3');
            subtitle.textContent = 'Descripción';
            subtitle.classList.add('rocket-subtitle'); 

            
            descriptionItem.innerHTML = ''; 
            descriptionItem.appendChild(subtitle); 
            descriptionItem.insertAdjacentHTML('beforeend', `<p>${description}</p>`);
         // Mostrar imágenes del cohete
            const imageContainer = document.querySelector('#section__image');
            const images = rockets[0].flickr_images;
            images.forEach(url => {
                const img = document.createElement('img');
                img.src = url;
                img.className = 'rocket-image';
                img.referrerPolicy = 'no-referrer';
                imageContainer.appendChild(img);
            });
        }
    } catch (error) {
        console.error("Error fetching rocket data:", error);
    }
});

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const rockets = await getAllRockets();
        if (rockets.length > 0) {
            const atmosphericAcceleration = rockets[0].first_stage.thrust_sea_level.kN; // Aceleración atmosférica en kN
            const speedInSpace = rockets[0].second_stage.thrust.kN; // Velocidad en espacio en kN
            const rateOfSuccess = rockets[0].success_rate_pct; // Tasa de éxito en porcentaje

            const data = [
                { title: 'Atmospheric acceleration', value: atmosphericAcceleration, unit: 'kN' },
                { title: 'Speed in space', value: speedInSpace, unit: 'kN' },
                { title: 'Rate of success', value: rateOfSuccess, unit: '%' }
            ];

            const container = document.querySelector('#progress-circles-container');
            data.forEach(item => {
                const circle = document.createElement('div');
                circle.classList.add('progress-circle');
                circle.style.setProperty('--progress', `${(item.value / 1000) * 100}%`); // Convertir kN a porcentaje (asumiendo un máximo adecuado)
                circle.dataset.value = `${item.value} ${item.unit}`;
                
                const title = document.createElement('div');
                title.textContent = item.title;
                title.classList.add('progress-title');
                
                circle.appendChild(title); // Insertar el título dentro del círculo

                container.appendChild(circle);
            });
        }
    } catch (error) {
        console.error("Error fetching rocket data:", error);
    }
});

export const galleryIndex = (res, category) => {
    let { products } = res.data;
    let plantilla = "";
    products.forEach(value => {
        plantilla += /*html*/`
        <article id="section__information__1" class="section__information__1">
            <div class="load" style="height: 150px;"></div>
        </article>
        <article class="section__information__container">
            <div class="section__information__2">
                <div>
                    <div class="load" style="height: 150px;"></div>
                </div>
                <div id="information__table__1" class="information__table__1">
                    <div class="load" style="height: 160px;"></div>
                </div>
            </div>
            <div id="section__image" class="section__image"></div>
            <div class="section__information__3">
                <div>
                    <div class="load" style="height: 150px;"></div>
                </div>
                <div id="information__table__2" class="information__table__2">
                    <div class="load" style="height: 160px;"></div>
                </div>
            </div>
        </article>
        `;
    });
    return plantilla;
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const rockets = await getAllRockets();
        if (rockets.length > 0) {
            const rocketWeightKg = rockets[0].mass.kg; // Peso del cohete en kg
            const rocketWeightLb = rockets[0].mass.lb; // Peso del cohete en lb
            const leoPayloadKg = rockets[0].payload_weights.find(payload => payload.id === 'leo').kg; // Carga útil a órbita terrestre baja en kg
            const leoPayloadLb = rockets[0].payload_weights.find(payload => payload.id === 'leo').lb; // Carga útil a órbita terrestre baja en lb
            const rocketHeightMeters = rockets[0].height.meters; // Altura del cohete en metros
            const rocketHeightFeet = rockets[0].height.feet; // Altura del cohete en pies
            const rocketDiameterMeters = rockets[0].diameter.meters; // Diámetro del cohete en metros
            const rocketDiameterFeet = rockets[0].diameter.feet; // Diámetro del cohete en pies
            const shieldDiameterMeters = rockets[0].second_stage.payloads.composite_fairing.diameter.meters; // Diámetro del escudo del cohete en metros
            const shieldDiameterFeet = rockets[0].second_stage.payloads.composite_fairing.diameter.feet; // Diámetro del escudo del cohete en pies
            const shieldHeightMeters = rockets[0].second_stage.payloads.composite_fairing.height.meters; // Altura del escudo del cohete en metros
            const shieldHeightFeet = rockets[0].second_stage.payloads.composite_fairing.height.feet; // Altura del escudo del cohete en pies

            const data = [
                { title: 'Rocket weight', value: `${rocketWeightKg} kg\n${rocketWeightLb} lb` },
                { title: 'Low Earth Orbit', value: `${leoPayloadKg} kg\n${leoPayloadLb} lb` },
                { title: 'Rocket Height', value: `${rocketHeightMeters} M\n${rocketHeightFeet} F` },
                { title: 'Rocket diameter', value: `${rocketDiameterMeters} M\n${rocketDiameterFeet} F` },
                { title: 'Diameter rocket shield', value: `${shieldDiameterMeters} M\n${shieldDiameterFeet} F` },
                { title: 'Height rocket shield', value: `${shieldHeightMeters} M\n${shieldHeightFeet} F` }
            ];

            const container = document.querySelector('#information__2');
            container.innerHTML = ''; // Limpiar el contenido actual del contenedor

            data.forEach(item => {
                const infoBox = document.createElement('div');
                infoBox.classList.add('load');
                infoBox.textContent = `${item.title} :\n${item.value}`;
                container.appendChild(infoBox);
            });
        }
    } catch (error) {
        console.error("Error fetching rocket data:", error);
    }
});


document.addEventListener("DOMContentLoaded", async () => {
    try {
        const rockets = await getAllRockets();
        const falcon1 = rockets.find(rocket => rocket.name.toLowerCase() === 'falcon 1');
        
        if (falcon1) {
            const rocketType = falcon1.type; // Tipo de cohete
            const rocketInService = falcon1.active ? "Active" : "Inactive"; // Cohete en servicio
            const numberOfStages = falcon1.stages; // Número de etapas
            const numberOfPropellants = `${falcon1.engines.propellant_1} & ${falcon1.engines.propellant_2}`; // Propelentes
            const totalMass = falcon1.mass.kg; // Masa total del cohete en kilogramos
            const payloadCapacity = falcon1.payload_weights[0].kg; // Capacidad de carga útil total en kilogramos

            const data = [
                { title: 'Rocket Type', value: rocketType },
                { title: 'Rocket in Service', value: rocketInService },
                { title: 'Low', value: falcon1.cost_per_launch },
                { title: 'Number of Stages', value: numberOfStages },
                { title: 'Number of Propellants', value: numberOfPropellants },
                { title: 'Total Mass (kg)', value: totalMass },
                { title: 'Payload Capacity (kg)', value: payloadCapacity }
            ];

            const container = document.querySelector('.section__information__2 .load');
            container.innerHTML = ''; // Limpiar el contenido actual del contenedor

            data.forEach(item => {
                const infoBox = document.createElement('div');
                infoBox.classList.add('load-item');
                infoBox.innerHTML = `
                    <p class="load-title">${item.title}</p>
                    <p class="load-value">${item.value}</p>
                `;
                container.appendChild(infoBox);
            });
        } else {
            console.error("Falcon 1 rocket not found.");
        }
    } catch (error) {
        console.error("Error fetching rocket data:", error);
    }
});

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const rockets = await getAllRockets();
        const falcon1 = rockets.find(rocket => rocket.name.toLowerCase() === 'falcon 1');
        
        if (falcon1) {
            const country = falcon1.country; // País del lanzamiento del cohete
            const company = falcon1.company; // Compañía que opera el cohete
            const firstFlight = falcon1.first_flight; // Primera fecha de vuelo del cohete

            const container = document.querySelector('#information__table__1 .load');
            container.innerHTML = ''; // Limpiar el contenido actual del contenedor

            const infoBoxCountry = document.createElement('div');
            infoBoxCountry.classList.add('load-item');
            infoBoxCountry.innerHTML = `
                <p class="load-title">Country:</p>
                <p class="load-value">${country}</p>
            `;
            container.appendChild(infoBoxCountry);

            const infoBoxCompany = document.createElement('div');
            infoBoxCompany.classList.add('load-item');
            infoBoxCompany.innerHTML = `
                <p class="load-title">Company:</p>
                <p class="load-value">${company}</p>
            `;
            container.appendChild(infoBoxCompany);

            const infoBoxFirstFlight = document.createElement('div');
            infoBoxFirstFlight.classList.add('load-item');
            infoBoxFirstFlight.innerHTML = `
                <p class="load-title">First Flight:</p>
                <p class="load-value">${firstFlight}</p>
            `;
            container.appendChild(infoBoxFirstFlight);
        } else {
            console.error("Falcon 1 rocket not found.");
        }
    } catch (error) {
        console.error("Error fetching rocket data:", error);
    }
});

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const rockets = await getAllRockets();
        const falcon1 = rockets.find(rocket => rocket.name.toLowerCase() === 'falcon 1');
        
        if (falcon1) {
            const engines = falcon1.engines; // Detalles de los motores

            // Verificar si engines.type existe y no es null
            const engineType = engines.type ? engines.type : 'No specific'; 

            const propellant1 = engines.propellant_1; // Primer propulsor
            const propellant2 = engines.propellant_2; // Segundo propulsor
            const thrustSeaLevel = engines.thrust_sea_level.kN; // Empuje al nivel del mar en kN
            const thrustVacuum = engines.thrust_vacuum.kN; // Empuje en el vacío en kN
            const ispSeaLevel = engines.isp.sea_level; // ISP al nivel del mar
            const ispVacuum = engines.isp.vacuum; // ISP en el vacío

            const data = [
                { title: 'Engine Type', value: engineType },
                { title: 'Propellant 1', value: propellant1 },
                { title: 'Propellant 2', value: propellant2 },
                { title: 'Thrust Sea Level (kN)', value: thrustSeaLevel },
                { title: 'Thrust Vacuum (kN)', value: thrustVacuum },
                { title: 'ISP Sea Level', value: ispSeaLevel },
                { title: 'ISP Vacuum', value: ispVacuum }
                // Agrega más detalles de los motores según sea necesario
            ];

            const container = document.querySelector('.section__information__3 .load');
            container.innerHTML = ''; // Limpiar el contenido actual del contenedor

            data.forEach(item => {
                const engineInfo = document.createElement('div');
                engineInfo.classList.add('load-item');
                engineInfo.innerHTML = `
                    <p class="load-title">${item.title}</p>
                    <p class="load-value">${item.value}</p>
                `;
                container.appendChild(engineInfo);
            });
        } else {
            console.error("Falcon 1 rocket not found.");
        }
    } catch (error) {
        console.error("Error fetching rocket data:", error);
    }
});
