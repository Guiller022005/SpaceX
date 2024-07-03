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

/*
  Actualización de la interfaz con la información de mi compañia
*/

export const paginationCompany = async() => {
    let data = await getAllCompany()
    await clear()
    await companyName(data.name);
}

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