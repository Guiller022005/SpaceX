import { 
    getAllRockets, 
    getAllRocketsId
} from "../modules/rockets.js";
///
import { 
    nameRockets,
    capsulesSerial,
    crewNames,
    launchName,
    coreSerial,
    landpadFullName,
    shipName,
    companyName,
    dragonName,
    historyTitle,
    launchpadfull_name,
    payloadName,
    roadName,
    starlinkName
} from "./title.js";
///
import { 
    informationRockets,
    informationLaunchCostRocket,
    informationFirstFlightRocket,
    informationWebRocket,
    
} from "./information.js";
///
import { 
    tableRocketColum1, 
    tableRocketColum2,
    
} from "./tables.js";
///
import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum
} from "./inform.js";
///
import { 
    imageRockets 
} from "./card.js";
///
import { 
    progressRocketWeight,
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket,
} from "../modulesComponents/progressBar.js";
///
import {
    getAllCapsules, 
    getAllCapsules_Id,
    getCapsules 
} from "../modules/capsules.js";
///
import {
    getAllCrew,
    getAllCrew_Id
} from "../modules/crew.js";
////
import {
    getAllLaunch_Id,
    getAll_launch
} from "../modules/launches.js";
///
import {
    getAllCore,
    getAllCore_Id
} from "../modules/cores.js";
///
import {
    getAllLandpads,
    getAllLandpad_Id
} from "../modules/landpads.js";
///
import {
    getAllShips,
    getAllships_Id
} from "../modules/ships.js";
///
import {
    getAllCompanys,
    getAllCompany,
    getAllCompany_Id
} from "../modules/company.js";
///
import {
    getAll_YouDragon,
    getAllDragon_Id
}
 from "../modules/dragon.js";
 ///
 import {
    getAll_HistoryMisions,
    getAllHistoryMisions_Id
 } from "../modules/history.js";
 ///
import { 
    getAll_launchpads,
    getAllLaunchpad_Id
 } from "../modules/launchpads.js";
///
import { 
    getAll_payloads,
    getAllPayload_Id
 } from "../modules/payloads.js";
///
import {
    getAll_roadster,
    getAllRoadster_Id,
    getAllRoadster
} from "../modules/roadster.js"
///
import {
    getAll_starlinks,
    getAllstarlink_Id
} from "../modules/starlink.js";

/*Efecto de carga*/

export const load = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = `
        <div class="load"></div>
    `;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = `
        <div class="load" style="height: 150px;"></div>
    `;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = `
        <div class="load" style="height: 350px"></div>
    `;


    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;
}

/**
 Limpiando el contenido de la pag
 */

export const clear = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = ``;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = ``;

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = ``;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = ``;

    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = ``;


    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = ``;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

}

/*
  Actualización de la interfaz con la información del cohete
 */

const getRocketsId = async(e)=>{
    e.preventDefault();
    // console.log(e.target);
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let Rocket = await getAllRocketsId(e.target.id);
    await clear();
    
    await informationRockets(Rocket.country, Rocket.description)
    await nameRockets(Rocket.name)
    await informationLaunchCostRocket(Rocket.cost_per_launch)
    await informationFirstFlightRocket(Rocket.first_flight)
    await informationWebRocket(Rocket.wikipedia)

    await informRocketEngineThrustSeaLevel(Rocket.engines.thrust_sea_level);
    await informRocketEngineThrustVacuum(Rocket.engines.thrust_vacuum);
    await imageRockets(Rocket.flickr_images);

    await tableRocketColum1(Rocket)
    await tableRocketColum2(Rocket)

    await progressRocketWeight(Rocket)
    await progressPayloadWeights(Rocket)
    await progressHeightRocket(Rocket)
    await progressDiameterRocket(Rocket)
    await progressSecondStageDiameterRocket(Rocket)
    await progressSecondStageHeightRocket(Rocket)
}
/**
 Paginacion de la seccion cohetes,
 */

export const paginationRockets = async()=>{
    let rockets = await getAllRockets();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
  
    rockets.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getRocketsId)
        div.appendChild(a);
    });
    
    let [p1,p2,p3,p4] = div.children
    p3.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    
    return div;
}


/*
  Actualización de la interfaz con la información de mis capsulas
*/


const extractCapsuleData = (capsule) => {
    return {
      type: capsule.type,
      status: capsule.status,
      id: capsule.id,
      reuse_count: capsule.reuse_count,
      water_landings: capsule.water_landings,
      land_landings: capsule.land_landings,
      last_update: capsule.last_update,
      launches: capsule.launches.join(", ") // concatenamos los lanzamientos en una cadena separada por comas
    };
  };
  
  
  const displayCapsuleData = (capsuleData) => {
    const section1Load = document.querySelector("#section__information__1 .load");
    section1Load.innerHTML = `
      <p>Type: ${capsuleData.type}</p>
      <p>Status: ${capsuleData.status}</p>
      <p>id: ${capsuleData.id}</p>
    `;
    section1Load.classList.remove('hidden');
  
    let information2Divs = document.querySelectorAll("#information__2 .load");
    const infoContents = [
      `<p>Reuse Count: ${capsuleData.reuse_count}</p>`,
      `<p>Water Landings: ${capsuleData.water_landings}</p>`,
      `<p>Land Landings: ${capsuleData.land_landings}</p>`
    ];
  
    infoContents.forEach((content, index) => {
      information2Divs[index].innerHTML = content;
      information2Divs[index].classList.remove('hidden');
    });
  
    // Ocultar los últimos dos divs vacíos
    information2Divs[3].classList.add('hidden');
    information2Divs[4].classList.add('hidden');
  
    const sectionImageLoad = document.querySelector("#section__image .load");
    sectionImageLoad.innerHTML = `
      <img src="storage/img/icons/capsulas.jpg" style="width: 100%; height: 100%; object-fit: cover;">
    `;
    sectionImageLoad.classList.remove('hidden');
  
    const informationTable1Load = document.querySelector("#information__table__1 .load");
    informationTable1Load.innerHTML = `<p>Launches: ${capsuleData.launches}</p>`;
    if (!capsuleData.launches) {
      informationTable1Load.classList.add('hidden');
    } else {
      informationTable1Load.classList.remove('hidden');
    }
  
    const informationTable2Load = document.querySelector("#information__table__2 .load");
    informationTable2Load.innerHTML = `<p>Last Update: ${capsuleData.last_update}</p>`;
    if (!capsuleData.last_update) {
      informationTable2Load.classList.add('hidden');
    } else {
      informationTable2Load.classList.remove('hidden');
    }
  };

  
  const getCapsulesId = async (e) => {
    e.preventDefault();
  
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationCapsules(Number(e.target.dataset.page)));
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let p1 = paginacion.children[0].children[1];
            p1.click();
        }, 200);
    }
  
    let a = e.target.parentElement.children;
    for (let val of a) {
      val.classList.remove('activo');
    }
    e.target.classList.add('activo');
  
    let capsules = await getAllCapsules_Id(e.target.id);
    console.log(capsules);
  
    let capsuleData = extractCapsuleData(capsules);
    displayCapsuleData(capsuleData);
  
    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";
  
    await capsulesSerial(capsules.serial);
};

/**
 Paginacion de la seccion de mis capsulas..
 */

export const paginationCapsules = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCapsules(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCapsulesId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCapsulesId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCapsulesId)
    div.appendChild(end);
    console.log(div);
    let [back, p1,p2,p3,p4, next] = div.children
    p1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}

const extractCrewData = (crew) => {
    return {
        agency: crew.agency,
        image: crew.image,
        wikipedia: crew.wikipedia,
        launches: crew.launches.join(", "), // concatenamos los lanzamientos en una cadena separada por comas
        status: crew.status,
        id: crew.id
    };
};



const displayCrewData = (crewData) => {
    const section1Load = document.querySelector("#section__information__1 .load");
    section1Load.innerHTML = `
        <p>Agency: ${crewData.agency}</p>
        <p>Status: ${crewData.status}</p>
        <p>ID: ${crewData.id}</p>
    `;
    section1Load.classList.remove('hidden');

    const sectionImageLoad = document.querySelector("#section__image .load");
    sectionImageLoad.innerHTML = `
        <img src="${crewData.image}" style="width: 100%; height: 100%; object-fit: cover;" alt="${crewData.agency}" <img src="https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg" referrerpolicy="no-referrer">/>
    `;
    sectionImageLoad.style.height = "450px"; // Ajuste de altura a 400px
    sectionImageLoad.classList.remove('hidden');

    const informationTable2Load = document.querySelector("#information__table__2 .load");
    informationTable2Load.innerHTML = `
    
        <p>Launches: ${crewData.launches}</p>
    `;
    informationTable2Load.classList.remove('hidden');

    const informationTable1Load = document.querySelector("#information__table__1 .load");
    informationTable1Load.innerHTML = `
        <p><a href="${crewData.wikipedia}" target="_blank">Wikipedia</a></p>
        
    `;
    informationTable1Load.classList.remove('hidden');
};





/*
  Actualización de la interfaz con la información de mi tripulacion
*/

const getCrewId = async (e) => {
    e.preventDefault();

    if (e.target.dataset.page) {
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationCrew(Number(e.target.dataset.page)));
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let p1 = paginacion.children[0].children[1];
            p1.click();
        }, 200);
    }

    let a = e.target.parentElement.children;
    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    let crew = await getAllCrew_Id(e.target.id);
    console.log(crew);

    let crewData = extractCrewData(crew);
    displayCrewData(crewData);

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";

    await crewNames(crew.name);
};



/**
 Paginacion de la seccion de mis capsulas..
*/


export const paginationCrew = async (page = 1, limit = 4) => {
    let { docs, pagingCounter, totalPages, nextPage } = await getAllCrew(page, limit);

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");

    let start = document.createElement("a");
    start.setAttribute("href", "#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page == 1) ? totalPages : page - 1);
    start.addEventListener("click", getCrewId);
    div.appendChild(start);

    docs.forEach((val, id) => {
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCrewId);
        div.appendChild(a);
        pagingCounter++;
    });

    let end = document.createElement("a");
    end.setAttribute("href", "#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page + 1 : 1);
    end.addEventListener("click", getCrewId);
    div.appendChild(end);

    console.log(div);
    let [back, p1, p2, p3, p4, next] = div.children;
    p1.click();

    return div;
};

const extractLaunchData = (launch) => {
    return {
        flight_number: launch.flight_number,
        name: launch.name,
        date_utc: launch.date_utc,
        date_unix: launch.date_unix,
        date_local: launch.date_local,
        date_precision: launch.date_precision,
        upcoming: launch.upcoming,
        rocket: launch.rocket,
        success: launch.success,
        failures: (launch.failures || []).map(failure => ({
            time: failure.time,
            altitude: failure.altitude,
            reason: failure.reason
        })),
        details: launch.details,
        crew: (launch.crew || []).join(", "),
        ships: (launch.ships || []).join(", "),
        capsules: (launch.capsules || []).join(", "),
        payloads: (launch.payloads || []).join(", "),
        launchpad: launch.launchpad,
        auto_update: launch.auto_update,
        static_fire_date_utc: launch.static_fire_date_utc,
        static_fire_date_unix: launch.static_fire_date_unix,
        links: {
            patch: launch.links?.patch?.small || 'default_image.jpg',
            reddit: {
                campaign: launch.links?.reddit?.campaign,
                launch: launch.links?.reddit?.launch,
                media: launch.links?.reddit?.media,
                recovery: launch.links?.reddit?.recovery
            },
            flickr: {
                small: launch.links?.flickr?.small,
                original: launch.links?.flickr?.original
            },
            presskit: launch.links?.presskit,
            webcast: launch.links?.webcast,
            youtube_id: launch.links?.youtube_id,
            article: launch.links?.article,
            wikipedia: launch.links?.wikipedia
        },
        id: launch.id
    };
};

const displayLaunchData = (launchData) => {
    const section1Load = document.querySelector("#section__information__1 .load");
    section1Load.innerHTML = `
        <p>Details: ${launchData.details || "No details available"}</p>
        <p>Flight Number: ${launchData.flight_number}</p>
        <p>Rocket: ${launchData.rocket}</p>
    `;
    section1Load.classList.remove('hidden');

    const information__2Load = document.querySelector("#information__2");

    // Clear previous content if any
    information__2Load.innerHTML = "";

    // Create separate <div class="load"> for each link and detail
    if (launchData.links.wikipedia) {
        const wikipediaLoad = document.createElement('div');
        wikipediaLoad.classList.add('load');
        wikipediaLoad.innerHTML = `<p><a href="${launchData.links.wikipedia}" target="_blank">Wikipedia</a></p>`;
        information__2Load.appendChild(wikipediaLoad);
    }

    if (launchData.links.webcast) {
        const webcastLoad = document.createElement('div');
        webcastLoad.classList.add('load');
        webcastLoad.innerHTML = `<p><a href="${launchData.links.webcast}" target="_blank">Webcast</a></p>`;
        information__2Load.appendChild(webcastLoad);
    }

    if (launchData.links.article) {
        const articleLoad = document.createElement('div');
        articleLoad.classList.add('load');
        articleLoad.innerHTML = `<p><a href="${launchData.links.article}" target="_blank">Article</a></p>`;
        information__2Load.appendChild(articleLoad);
    }

    const staticFireLoad = document.createElement('div');
    staticFireLoad.classList.add('load');
    staticFireLoad.innerHTML = `
        <p>Static Fire Date (UTC): ${launchData.static_fire_date_utc || "N/A"}</p>
    `;
    information__2Load.appendChild(staticFireLoad);

    const failuresLoad = document.createElement('div');
    failuresLoad.classList.add('load');
    failuresLoad.innerHTML = `
        <p>Failures: ${launchData.failures.length > 0 ? launchData.failures.map(failure => failure.reason).join(', ') : "None"}</p>
    `;
    information__2Load.appendChild(failuresLoad);

    // Show the section
    information__2Load.classList.remove('hidden');

    const sectionImageLoad = document.querySelector("#section__image .load");
    sectionImageLoad.innerHTML = `
        <img src="storage/img/icons/launches.jpg" style="width: 100%; height: 100%; object-fit: cover;">
    `;
    sectionImageLoad.classList.remove('hidden');

    const informationTable1Load = document.querySelector("#information__table__1 .load");
    informationTable1Load.innerHTML = `
        <p>Date (UTC): ${launchData.date_utc}</p>
        <p>Date Local: ${launchData.date_local}</p>
        
    `;
    informationTable1Load.classList.remove('hidden');

    const informationTable2Load = document.querySelector("#information__table__2 .load");
    informationTable2Load.innerHTML = `
        <p>Success: ${launchData.success ? "Yes" : "No"}</p>
        <p>Upcoming: ${launchData.upcoming ? "Yes" : "No"}</p>
        <p>Crew: ${launchData.crew}</p>
        
    `;
    informationTable2Load.classList.remove('hidden');
};



/*
  Actualización de la interfaz con la información de mis launches
*/

const getAllLaunches_ForId = async (e) => {
    e.preventDefault();
  
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationLaunche(Number(e.target.dataset.page)));
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let p1 = paginacion.children[0].children[1];
            p1.click();
        }, 200);
    }
  
    let a = e.target.parentElement.children;
    for (let val of a) {
      val.classList.remove('activo');
    }
    e.target.classList.add('activo');
  
    let launch = await getAllLaunch_Id(e.target.id);
    console.log(launch);

    let launchData = extractLaunchData(launch);
    displayLaunchData(launchData);

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";
    
  
    await launchName(launch.name);
};


/**
 Paginacion de la seccion de mis launches..
 */

 export const paginationLaunche = async(page=1, limit= 5)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAll_launch(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllLaunches_ForId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllLaunches_ForId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllLaunches_ForId)
    div.appendChild(end);
    console.log(div);
    let [back, p1,p2,p3,p4, next] = div.children
    p1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}

const extractCoreData = (core) => {
    return {
        block: core.block,
        reuse_count: core.reuse_count,
        rtls_attempts: core.rtls_attempts,
        rtls_landings: core.rtls_landings,
        asds_attempts: core.asds_attempts,
        asds_landings: core.asds_landings,
        last_update: core.last_update,
        launches: core.launches,
        status: core.status,
        id: core.id
    };
};

const displayCoreData = (coresData) => {
    const section1Load = document.querySelector("#section__information__1 .load");
    section1Load.innerHTML = `
    <p>Status: ${coresData.status}</p>
    <p>ID: ${coresData.id}</p>
    <p>Block: ${coresData.block}</p>
    `;
    
    section1Load.classList.remove('hidden');

    const informationTable1Load = document.querySelector("#information__table__1 .load");
    informationTable1Load.innerHTML = `
        <p>Rtls_attempts: ${coresData.rtls_attempts}</p>
        <p>Drtls_landings: ${coresData.rtls_landings}</p>
        
    `;
    informationTable1Load.classList.remove('hidden');

    const informationTable2Load = document.querySelector("#information__table__2 .load");
    informationTable2Load.innerHTML = `
        <p>Launches: ${coresData.launches}</p>
        
    `;
    informationTable2Load.classList.remove('hidden');

    const sectionImageLoad = document.querySelector("#section__image .load");
    sectionImageLoad.innerHTML = `
        <img src="storage/img/icons/cores.jpg" style="width: 100%; height: 100%; object-fit: cover;">
    `;
    sectionImageLoad.classList.remove('hidden');

    const information__2Load = document.querySelector("#information__2");

    // Clear previous content if any
    information__2Load.innerHTML = "";

    const Asds_attemptsLoad = document.createElement('div');
    Asds_attemptsLoad.classList.add('load');
    Asds_attemptsLoad.innerHTML = `
        <p>Asds_attempts: ${coresData.asds_attempts}</p>
    `;
    information__2Load.appendChild(Asds_attemptsLoad);

    const asds_landingsLoad = document.createElement('div');
    asds_landingsLoad.classList.add('load');
    asds_landingsLoad.innerHTML = `
        <p>Asds_landings: ${coresData.asds_landings}</p>
    `;
    information__2Load.appendChild(asds_landingsLoad);

    const reuse_countLoad = document.createElement('div');
    reuse_countLoad.classList.add('load');
    reuse_countLoad.innerHTML = `
        <p>Reuse_count: ${coresData.reuse_count}</p>
    `;
    information__2Load.appendChild(reuse_countLoad);
};

/*
  Actualización de la interfaz con la información de mis coress
*/

const getAllCore_ForId = async (e) => {
    e.preventDefault();
  
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationCore(Number(e.target.dataset.page)));
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let p1 = paginacion.children[0].children[1];
            p1.click();
        }, 200);
    }
  
    let a = e.target.parentElement.children;
    for (let val of a) {
      val.classList.remove('activo');
    }
    e.target.classList.add('activo');
  
    let cores = await getAllCore_Id(e.target.id);
    console.log(cores);

    let coresData = extractCoreData(cores);
    displayCoreData(coresData);
  
    await coreSerial(cores.serial);
};

/**
 Paginacion de la seccion de mis cores..
 */

 export const paginationCore = async(page=1, limit= 5)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCore(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllCore_ForId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllCore_ForId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllCore_ForId)
    div.appendChild(end);
    console.log(div);
    let [back, p1,p2,p3,p4, next] = div.children
    p1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}


const extractLandpadData = (landpad) => {
    return {
        full_name: landpad.full_name,
        name: landpad.name,
        status: landpad.status,
        type: landpad.type,
        locality: landpad.locality,
        region: landpad.region,
        latitude: landpad.latitude,
        longitude: landpad.longitude,
        landing_attempts: landpad.landing_attempts,
        landing_successes: landpad.landing_successes,
        wikipedia: landpad.wikipedia,
        details: landpad.details,
        launches: landpad.launches,
        id: landpad.id
    };
};


const displayLandpadData = (landpadData) => {
    const section1Load = document.querySelector("#section__information__1 .load");
    section1Load.innerHTML = `
        <p>Name: ${landpadData.name}</p>
        <p>Status: ${landpadData.status}</p>
        <p>ID: ${landpadData.id}</p>
    `;
    section1Load.classList.remove('hidden');

    const informationTable1Load = document.querySelector("#information__table__1 .load");
    informationTable1Load.innerHTML = `
        <p>Type: ${landpadData.type}</p>
        <p>Locality: ${landpadData.locality}</p>
    `;
    informationTable1Load.classList.remove('hidden');

    const sectionImageLoad = document.querySelector("#section__image .load");
    sectionImageLoad.innerHTML = `
        <img src="storage/img/icons/landpads.png" style="width: 100%; height: 100%; object-fit: cover;">
    `;
    sectionImageLoad.classList.remove('hidden');

    const information__2Load = document.querySelector("#information__2");

    // Clear previous content if any
    information__2Load.innerHTML = "";

    const latitudeLoad = document.createElement('div');
    latitudeLoad.classList.add('load');
    latitudeLoad.innerHTML = `
        <p>Latitude: ${landpadData.latitude}</p>
    `;
    information__2Load.appendChild(latitudeLoad);

    const longitudeLoad = document.createElement('div');
    longitudeLoad.classList.add('load');
    longitudeLoad.innerHTML = `
        <p>Longitude: ${landpadData.longitude}</p>
    `;
    information__2Load.appendChild(longitudeLoad);

    const landingAttemptsLoad = document.createElement('div');
    landingAttemptsLoad.classList.add('load');
    landingAttemptsLoad.innerHTML = `
        <p>Landing Attempts: ${landpadData.landing_attempts}</p>
    `;
    information__2Load.appendChild(landingAttemptsLoad);

    const landingSuccessesLoad = document.createElement('div');
    landingSuccessesLoad.classList.add('load');
    landingSuccessesLoad.innerHTML = `
        <p>Landing Successes: ${landpadData.landing_successes}</p>
    `;
    information__2Load.appendChild(landingSuccessesLoad);

    if (landpadData.wikipedia) {
        const wikipediaLoad = document.createElement('div');
        wikipediaLoad.classList.add('load');
        wikipediaLoad.innerHTML = `
            <p>Wikipedia: <a href="${landpadData.wikipedia}" target="_blank">Wikipedia</a></p>
        `;
        information__2Load.appendChild(wikipediaLoad);
    }

    if (landpadData.details) {
        const detailsLoad = document.createElement('div');
        detailsLoad.classList.add('load');
        detailsLoad.innerHTML = `
            <p>Details: ${landpadData.details}</p>
        `;
        information__2Load.appendChild(detailsLoad);
    }

    information__2Load.classList.remove('hidden');
};


/*
  Actualización de la interfaz con la información de mis landpadss
*/

const getAlllandpad_ForId = async (e) => {
    e.preventDefault();
  
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationLandpad(Number(e.target.dataset.page)));
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let p1 = paginacion.children[0].children[1];
            p1.click();
        }, 200);
    }
  
    let a = e.target.parentElement.children;
    for (let val of a) {
      val.classList.remove('activo');
    }
    e.target.classList.add('activo');
  
    let landpad = await getAllLandpad_Id(e.target.id);
    console.log(landpad);

    let landpadData = extractLandpadData(landpad);
    displayLandpadData(landpadData);
  
    await landpadFullName(landpad.full_name);
};


/**
 Paginacion de la seccion de mis landpads..
 */

 export const paginationLandpad = async(page=1, limit= 5)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLandpads(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAlllandpad_ForId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAlllandpad_ForId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAlllandpad_ForId)
    div.appendChild(end);
    console.log(div);
    let [back, p1,p2,p3,p4, next] = div.children
    p1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}

const extractShipData = (ship) => {
    return {
        legacy_id: ship.legacy_id,
        model: ship.model,
        type: ship.type,
        roles: ship.roles,
        imo: ship.imo,
        mmsi: ship.mmsi,
        abs: ship.abs,
        class: ship.class,
        mass_kg: ship.mass_kg,
        mass_lbs: ship.mass_lbs,
        year_built: ship.year_built,
        home_port: ship.home_port,
        status: ship.status,
        speed_kn: ship.speed_kn,
        course_deg: ship.course_deg,
        latitude: ship.latitude,
        longitude: ship.longitude,
        last_ais_update: ship.last_ais_update,
        link: ship.link,
        image: ship.image,
        launches: ship.launches,
        active: ship.active,
        id: ship.id
    };
};

const displayShipData = (shipData) => {
    const section1Load = document.querySelector("#section__information__1 .load");
    section1Load.innerHTML = `
    <p>Model: ${shipData.model}</p>
    <p>Active: ${shipData.active}</p>
    <p>ID: ${shipData.id}</p>
    <p><a href="${shipData.link}" target="_blank">link</a></p>
    `;
    section1Load.classList.remove('hidden');

    const sectionImageLoad = document.querySelector("#section__image .load");
    sectionImageLoad.innerHTML = `
        <img src="${shipData.image}" style="width: 100%; height: 100%; object-fit: cover;" alt="${shipData.agency}" <img src="https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg" referrerpolicy="no-referrer">
    `;
    sectionImageLoad.style.height = "450px"; // Ajuste de altura a 400px
    sectionImageLoad.classList.remove('hidden');

    const informationTable2Load = document.querySelector("#information__table__2 .load");
    informationTable2Load.innerHTML = `
    
        <p>Legacy_id: ${shipData.legacy_id}</p>
    `;
    informationTable2Load.classList.remove('hidden');

    const informationTable1Load = document.querySelector("#information__table__1 .load");
    informationTable1Load.innerHTML = `
    <p>Legacy_id: ${shipData.last_ais_update}</p>
    `;
    informationTable1Load.classList.remove('hidden');

    const information__2Load = document.querySelector("#information__2");

    // Clear previous content if any
    information__2Load.innerHTML = "";

    const mass_kgLoad = document.createElement('div');
    mass_kgLoad.classList.add('load');
    mass_kgLoad.innerHTML = `
        <p>Mass_kg: ${shipData.mass_kg}</p>
    `;
    information__2Load.appendChild(mass_kgLoad);

    const mass_lbsLoad = document.createElement('div');
    mass_lbsLoad.classList.add('load');
    mass_lbsLoad.innerHTML = `
        <p>Mass_lbs: ${shipData.mass_lbs}</p>
    `;
    information__2Load.appendChild(mass_lbsLoad);

    const speed_knLoad = document.createElement('div');
    speed_knLoad.classList.add('load');
    speed_knLoad.innerHTML = `
        <p>Speed_kn: ${shipData.speed_kn}</p>
    `;
    information__2Load.appendChild(speed_knLoad);

    const course_degLoad = document.createElement('div');
    course_degLoad.classList.add('load');
    course_degLoad.innerHTML = `
        <p>Speed_kn: ${shipData.course_deg}</p>
    `;
    information__2Load.appendChild(course_degLoad);

    const latitudeLoad = document.createElement('div');
    latitudeLoad.classList.add('load');
    latitudeLoad.innerHTML = `
        <p>Speed_kn: ${shipData.latitude}</p>
    `;
    information__2Load.appendChild(latitudeLoad);

    const longitudeLoad = document.createElement('div');
    longitudeLoad.classList.add('load');
    longitudeLoad.innerHTML = `
        <p>Speed_kn: ${shipData.longitude}</p>
    `;
    information__2Load.appendChild(longitudeLoad);

    const launchesLoad = document.createElement('div');
    launchesLoad.classList.add('load');
    launchesLoad.innerHTML = `
        <p>Speed_kn: ${shipData.launches}</p>
    `;
    information__2Load.appendChild(launchesLoad);
};


/*
  Actualización de la interfaz con la información de mis barcoss
*/

const getAllShips_ForId = async (e) => {
    e.preventDefault();
  
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationShips(Number(e.target.dataset.page)));
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let p1 = paginacion.children[0].children[1];
            p1.click();
        }, 200);
    }
  
    let a = e.target.parentElement.children;
    for (let val of a) {
      val.classList.remove('activo');
    }
    e.target.classList.add('activo');
  
    let ship = await getAllships_Id(e.target.id);
    console.log(ship);

    let shipData = extractShipData(ship);
    displayShipData(shipData);
  
    await shipName(ship.name);
};

/**
 Paginacion de la seccion de mis barcoss..
 */

 export const paginationShips = async(page=1, limit= 5)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllShips(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllShips_ForId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllShips_ForId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllShips_ForId)
    div.appendChild(end);
    console.log(div);
    let [back, p1,p2,p3,p4, next] = div.children
    p1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}

const extractCompanyData = (company) => {
    return {
        name: company.name,
        headquarters: {
            address: company.headquarters.address,
            city: company.headquarters.city,
            state: company.headquarters.state
        },
        links: {
            website: company.links.website,
            flickr: company.links.flickr,
            twitter: company.links.twitter,
            elon_twitter: company.links.elon_twitter
        },
        founder: company.founder,
        founded: company.founded,
        employees: company.employees,
        vehicles: company.vehicles,
        launch_sites: company.launch_sites,
        test_sites: company.test_sites,
        ceo: company.ceo,
        cto: company.cto,
        coo: company.coo,
        cto_propulsion: company.cto_propulsion,
        valuation: company.valuation,
        summary: company.summary,
        id: company.id
    };
};


const displayCompanyData = (companyData) => {
    const section1Load = document.querySelector("#section__information__1");
    if (section1Load) {
        section1Load.innerHTML = `
            <p>Nombre: ${companyData.name}</p>
            <p>Fundador: ${companyData.founder}</p>
            <p>Estado: ${companyData.headquarters.state}</p>
            <p>ID: ${companyData.id}</p>
            <p>Fundada: ${companyData.founded}</p>
        `;
        section1Load.classList.remove('hidden');
    } else {
        console.error('El elemento con el selector "#section__information__1 " no existe en el DOM');
    }

    const sectionImageLoad = document.querySelector("#section__image ");
    if (sectionImageLoad) {
        sectionImageLoad.innerHTML = `
            <img src="storage/img/icons/company.jpg" style="width: 100%; height: 100%; object-fit: contain;">
        `;
        sectionImageLoad.classList.remove('hidden');
    } else {
        console.error('El elemento con el selector "#section__image " no existe en el DOM');
    }

    const informationTable2Load = document.querySelector("#information__table__2 ");
    if (informationTable2Load) {
        informationTable2Load.innerHTML = `
            <p>Empleados: ${companyData.employees}</p>
        `;
        informationTable2Load.classList.remove('hidden');
    } else {
        console.error('El elemento con el selector "#information__table__2 " no existe en el DOM');
    }

    const informationTable1Load = document.querySelector("#information__table__1 ");
    if (informationTable1Load) {
        informationTable1Load.innerHTML = `
            <p>CEO: ${companyData.ceo}</p>
        `;
        informationTable1Load.classList.remove('hidden');
    } else {
        console.error('El elemento con el selector "#information__table__1 " no existe en el DOM');
    }

    const information__2Load = document.querySelector("#information__2");
    if (information__2Load) {
        information__2Load.innerHTML = "";

        const vehiclesLoad = document.createElement('div');
        vehiclesLoad.classList.add('load');
        vehiclesLoad.innerHTML = `
            <p>Vehículos: ${companyData.vehicles}</p>
        `;
        information__2Load.appendChild(vehiclesLoad);

        const cto_propulsionLoad = document.createElement('div');
        cto_propulsionLoad.classList.add('load');
        cto_propulsionLoad.innerHTML = `
            <p>CTO Propulsión: ${companyData.cto_propulsion}</p>
        `;
        information__2Load.appendChild(cto_propulsionLoad);

        const valuationLoad = document.createElement('div');
        valuationLoad.classList.add('load');
        valuationLoad.innerHTML = `
            <p>Valoración: ${companyData.valuation}</p>
        `;
        information__2Load.appendChild(valuationLoad);

        const summaryLoad = document.createElement('div');
        summaryLoad.classList.add('load');
        summaryLoad.innerHTML = `
            <p>Resumen: ${companyData.summary}</p>
        `;
        information__2Load.appendChild(summaryLoad);

        const linkswebsiteLoad = document.createElement('div');
        linkswebsiteLoad.classList.add('load');
        linkswebsiteLoad.innerHTML = `
            <p>Sitio web: <a href="${companyData.links.website}" target="_blank">${companyData.links.website}</a></p>
        `;
        information__2Load.appendChild(linkswebsiteLoad);

        const linkstwitterLoad = document.createElement('div');
        linkstwitterLoad.classList.add('load');
        linkstwitterLoad.innerHTML = `
            <p>Twitter: <a href="${companyData.links.twitter}" target="_blank">${companyData.links.twitter}</a></p>
        `;
        information__2Load.appendChild(linkstwitterLoad);

        const linkselon_twitterLoad = document.createElement('div');
        linkselon_twitterLoad.classList.add('load');
        linkselon_twitterLoad.innerHTML = `
            <p>Elon Twitter: <a href="${companyData.links.elon_twitter}" target="_blank">${companyData.links.elon_twitter}</a></p>
        `;
        information__2Load.appendChild(linkselon_twitterLoad);
    } else {
        console.error('El elemento con el selector "#information__2" no existe en el DOM');
    }
};



/*
  Actualización de la interfaz con la información de mi compañia
*/

document.addEventListener('DOMContentLoaded', async () => {
    await paginationCompany();
});

export const paginationCompany = async () => {
    try {
        let company = await getAllCompany();
        await clear();

        let companyData = extractCompanyData(company);
        displayCompanyData(companyData);

        await companyName(company.name);
    } catch (error) {
        console.error('Error fetching and displaying company data:', error);
    }
};

const extractDragonData = (dragon) => {
    return {
        heat_shield: {
            material: dragon.heat_shield.material,
            size_meters: dragon.heat_shield.size_meters,
            temp_degrees: dragon.heat_shield.temp_degrees,
            dev_partner: dragon.heat_shield.dev_partner,
        },
        launch_payload_mass: {
            kg: dragon.launch_payload_mass.kg,
            lb: dragon.launch_payload_mass.lb,
        },
        launch_payload_vol: {
            cubic_meters: dragon.launch_payload_vol.cubic_meters,
            cubic_feet: dragon.launch_payload_vol.cubic_feet,
        },
        return_payload_mass: {
            kg: dragon.return_payload_mass.kg,
            lb: dragon.return_payload_mass.lb,
        },
        return_payload_vol: {
            cubic_meters: dragon.return_payload_vol.cubic_meters,
            cubic_feet: dragon.return_payload_vol.cubic_feet,
        },
        pressurized_capsule: {
            payload_volume: {
                cubic_meters: dragon.pressurized_capsule.payload_volume.cubic_meters,
                cubic_feet: dragon.pressurized_capsule.payload_volume.cubic_feet,
            }
        },
        trunk: {
            trunk_volume: {
                cubic_meters: dragon.trunk.trunk_volume.cubic_meters,
                cubic_feet: dragon.trunk.trunk_volume.cubic_feet,
            },
            cargo: {
                solar_array: dragon.trunk.cargo.solar_array,
                unpressurized_cargo: dragon.trunk.cargo.unpressurized_cargo,
            }
        },
        height_w_trunk: {
            meters: dragon.height_w_trunk.meters,
            feet: dragon.height_w_trunk.feet,
        },
        diameter: {
            meters: dragon.diameter.meters,
            feet: dragon.diameter.feet,
        },
        first_flight: dragon.first_flight,
        flickr_images: dragon.flickr_images,
        name: dragon.name,
        type: dragon.type,
        active: dragon.active,
        crew_capacity: dragon.crew_capacity,
        sidewall_angle_deg: dragon.sidewall_angle_deg,
        orbit_duration_yr: dragon.orbit_duration_yr,
        dry_mass_kg: dragon.dry_mass_kg,
        dry_mass_lb: dragon.dry_mass_lb,
        thrusters: dragon.thrusters.map(thruster => ({
            type: thruster.type,
            amount: thruster.amount,
            pods: thruster.pods,
            fuel_1: thruster.fuel_1,
            fuel_2: thruster.fuel_2,
            isp: thruster.isp,
            thrust: {
                kN: thruster.thrust.kN,
                lbf: thruster.thrust.lbf,
            }
        })),
        wikipedia: dragon.wikipedia,
        description: dragon.description,
        id: dragon.id,
    };
};

const displayDragonData = (DragonData) => {
    const section1Load = document.querySelector("#section__information__1 .load");
    section1Load.innerHTML = `
        <p>Type: ${DragonData.type}</p>
        <ul>Thrusters:
            ${DragonData.thrusters.map(thruster => `<li>${thruster.type}</li>`).join('')}
        </ul>
        <p>ID: ${DragonData.id}</p>
    `;
    section1Load.classList.remove('hidden');

    const informationTable1Load = document.querySelector("#information__table__1 .load");
    informationTable1Load.innerHTML = `
        <p>Active: ${DragonData.active}</p>
        <p>Crew Capacity: ${DragonData.crew_capacity}</p>
    `;
    informationTable1Load.classList.remove('hidden');

    const informationTable2Load = document.querySelector("#information__table__2 .load");
    informationTable2Load.innerHTML = `
        <ul>Thrusters:
            ${DragonData.thrusters.map(thruster => `<li>${thruster.type}</li>`).join('')}
        </ul>
        <p>Crew Capacity: ${DragonData.crew_capacity}</p>
    `;
    informationTable2Load.style.display = 'flex';
    informationTable2Load.style.flexDirection = 'column';
    informationTable2Load.classList.remove('hidden');

    const sectionImageLoad = document.querySelector("#section__image .load");
    sectionImageLoad.innerHTML = `
        <div style="display: flex; overflow-x: auto; width: 100%; height: 100%;">
            ${DragonData.flickr_images.map(img => `
                <img src="${img}" style="flex-shrink: 0; width: auto; height: 100%; object-fit: cover; margin-right: 10px;" referrerpolicy="no-referrer">
            `).join('')}
        </div>
    `;
    sectionImageLoad.classList.remove('hidden');

    const information__2Load = document.querySelector("#information__2");

    // Clear previous content if any
    information__2Load.innerHTML = "";

    const orbitDurationLoad = document.createElement('div');
    orbitDurationLoad.classList.add('load');
    orbitDurationLoad.innerHTML = `
        <p>Orbit Duration (yr): ${DragonData.orbit_duration_yr}</p>
    `;
    information__2Load.appendChild(orbitDurationLoad);

    const dryMassLoad = document.createElement('div');
    dryMassLoad.classList.add('load');
    dryMassLoad.innerHTML = `
        <p>Dry Mass (kg): ${DragonData.dry_mass_kg}</p>
    `;
    information__2Load.appendChild(dryMassLoad);

    const landingSuccessesLoad = document.createElement('div');
    landingSuccessesLoad.classList.add('load');
    landingSuccessesLoad.innerHTML = `
        <p>Landing Successes: ${DragonData.landing_successes}</p>
    `;
    information__2Load.appendChild(landingSuccessesLoad);

    if (DragonData.wikipedia) {
        const wikipediaLoad = document.createElement('div');
        wikipediaLoad.classList.add('load');
        wikipediaLoad.innerHTML = `
            <p>Wikipedia: <a href="${DragonData.wikipedia}" target="_blank">Wikipedia</a></p>
        `;
        information__2Load.appendChild(wikipediaLoad);
    }

    const descriptionLoad = document.createElement('div');
    descriptionLoad.classList.add('load');
    descriptionLoad.innerHTML = `
        <p>Description: ${DragonData.description}</p>
    `;
    information__2Load.appendChild(descriptionLoad);
};




/*
  Actualización de la interfaz con la información de mis naves dragon
*/

const getAllDragon_ForId = async (e) => {
    e.preventDefault();
  
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationDrago(Number(e.target.dataset.page)));
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let p1 = paginacion.children[0].children[1];
            p1.click();
        }, 200);
    }
  
    let a = e.target.parentElement.children;
    for (let val of a) {
      val.classList.remove('activo');
    }
    e.target.classList.add('activo');
  
    let dragon = await getAllDragon_Id(e.target.id);
    console.log(dragon);

    let dragonData = extractDragonData(dragon);
    displayDragonData(dragonData);
  
    await dragonName(dragon.name);
};

/**
 Paginacion de la seccion de mis naves Dragon..
 */

 export const paginationDrago = async(page=1, limit= 5)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAll_YouDragon(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllDragon_ForId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllDragon_ForId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllDragon_ForId)
    div.appendChild(end);
    console.log(div);
    let [back, p1,p2,p3,p4, next] = div.children
    p1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}

/*
  Actualización de la interfaz con la información de mi historial de misiones
*/

const getAllHistory_ForId = async (e) => {
    e.preventDefault();
  
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationHistories(Number(e.target.dataset.page)));
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let p1 = paginacion.children[0].children[1];
            p1.click();
        }, 200);
    }
  
    let a = e.target.parentElement.children;
    for (let val of a) {
      val.classList.remove('activo');
    }
    e.target.classList.add('activo');
  
    let history = await getAllHistoryMisions_Id(e.target.id);
    console.log(history);
  
    await historyTitle(history.title);
};

/**
 Paginacion de la seccion de mi historial de misiones..
 */

 export const paginationHistories = async(page=1, limit= 5)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAll_HistoryMisions(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllHistory_ForId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllHistory_ForId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllHistory_ForId)
    div.appendChild(end);
    console.log(div);
    let [back, p1,p2,p3,p4, next] = div.children
    p1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}



/*
  Actualización de la interfaz con la información de mis launchpads
*/

const getAllLaunchpads_ForId = async (e) => {
    e.preventDefault();
  
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationLaunches(Number(e.target.dataset.page)));
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let p1 = paginacion.children[0].children[1];
            p1.click();
        }, 200);
    }
  
    let a = e.target.parentElement.children;
    for (let val of a) {
      val.classList.remove('activo');
    }
    e.target.classList.add('activo');
  
    let launch = await getAllLaunchpad_Id(e.target.id);
    console.log(launch);
  
    await launchpadfull_name(launch.full_name);
};

/**
 Paginacion de la seccion de mi historial de launchpads..
 */

 export const paginationLaunches = async(page=1, limit= 5)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAll_launchpads(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllLaunchpads_ForId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllLaunchpads_ForId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllLaunchpads_ForId)
    div.appendChild(end);
    console.log(div);
    let [back, p1,p2,p3,p4, next] = div.children
    p1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}

/*
  Actualización de la interfaz con la información de mis Payloads
*/

const getAllPayloads_ForId = async (e) => {
    e.preventDefault();
  
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationPayoades(Number(e.target.dataset.page)));
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let p1 = paginacion.children[0].children[1];
            p1.click();
        }, 200);
    }
  
    let a = e.target.parentElement.children;
    for (let val of a) {
      val.classList.remove('activo');
    }
    e.target.classList.add('activo');
  
    let payload = await getAllPayload_Id(e.target.id);
    console.log(payload);
  
    await payloadName(payload.name);
};

/**
 Paginacion de la seccion de mi historial de launchpads..
 */

export const paginationPayoades = async(page=1, limit= 5)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAll_payloads(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllPayloads_ForId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllPayloads_ForId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllPayloads_ForId)
    div.appendChild(end);
    console.log(div);
    let [back, p1,p2,p3,p4, next] = div.children
    p1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}

/*
  Actualización de la interfaz con la información de mis roadster
*/
export const paginationRoadster = async() => {
    let data = await getAllRoadster()
    await clear()
    await roadName(data.name);
}


/*
  Actualización de la interfaz con la información de mis starlinks
*/

const getAllstarlinks_ForId = async (e) => {
    e.preventDefault();
  
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationStarlinks(Number(e.target.dataset.page)));
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let p1 = paginacion.children[0].children[1];
            p1.click();
        }, 200);
    }
  
    let a = e.target.parentElement.children;
    for (let val of a) {
      val.classList.remove('activo');
    }
    e.target.classList.add('activo');
  
    let starl = await getAllstarlink_Id(e.target.id);
    console.log(starl);
  
    await starlinkName(starl.spaceTrack.OBJECT_NAME);
};

/**
 Paginacion de la seccion de mi historial de starlinks..
 */

 export const paginationStarlinks = async(page=1, limit= 5)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAll_starlinks(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllstarlinks_ForId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllstarlinks_ForId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllstarlinks_ForId)
    div.appendChild(end);
    console.log(div);
    let [back, p1,p2,p3,p4, next] = div.children
    p1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}