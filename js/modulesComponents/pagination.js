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

const extractHistoryEventData = (historyEvent) => {
    return {
        title: historyEvent.title,
        event_date_utc: historyEvent.event_date_utc,
        event_date_unix: historyEvent.event_date_unix,
        details: historyEvent.details,
        article_link: historyEvent.links.article
    };
};

const displayHistoryData = (historyData) => {
    const section1Load = document.querySelector("#section__information__1");
    section1Load.innerHTML = `
        <p>Details: ${historyData.details}</p>
    `;
    section1Load.classList.remove('hidden');

    const sectionImageLoad = document.querySelector("#section__image ");
    sectionImageLoad.innerHTML = `
        <img src="storage/img/icons/history.webp" style="width: 100%; height: 100%; object-fit: contain;" referrerpolicy="no-referrer">
    `;
    sectionImageLoad.style.height = "450px"; // Ajuste de altura a 450px
    sectionImageLoad.classList.remove('hidden');

    const informationTable2Load = document.querySelector("#information__table__2");
    informationTable2Load.innerHTML = `
        <p>Event Date (UTC): ${historyData.event_date_utc}</p>
    `;
    informationTable2Load.classList.remove('hidden');

    const informationTable1Load = document.querySelector("#information__table__1");
    informationTable1Load.innerHTML = `
        <p>Event Date (Unix): ${historyData.event_date_unix}</p>
    `;
    informationTable1Load.classList.remove('hidden');

    const information__2Load = document.querySelector("#information__2");

    // Clear previous content if any
    information__2Load.innerHTML = "";
    const articleLinkDiv = document.createElement('div');
    articleLinkDiv.classList.add('load');
    articleLinkDiv.innerHTML = `
        <p>Article Link: <a href="${historyData.article_link}" target="_blank">${historyData.article_link}</a></p>
    `;
    information__2Load.appendChild(articleLinkDiv);
};

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
    
    let historyData = extractHistoryEventData(history);
    displayHistoryData(historyData);

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

const extractLaunchpadData = (launchpad) => {
    return {
        name: launchpad.name,
        full_name: launchpad.full_name,
        locality: launchpad.locality,
        region: launchpad.region,
        timezone: launchpad.timezone,
        latitude: launchpad.latitude,
        longitude: launchpad.longitude,
        launch_attempts: launchpad.launch_attempts,
        launch_successes: launchpad.launch_successes,
        rockets: launchpad.rockets,
        launches: launchpad.launches,
        status: launchpad.status,
        id: launchpad.id
    };
};

const displayLaunchpadData = (launchpadData) => {
    const section1Load = document.querySelector("#section__information__1 .load");
    section1Load.innerHTML = `
        <p>Name: ${launchpadData.name}</p>
        <p>Locality: ${launchpadData.locality}</p>
        <p>Status: ${launchpadData.status}</p>
        <p>ID: ${launchpadData.id}</p>
    `;
    section1Load.classList.remove('hidden');

    const information__2Load = document.querySelector("#information__2");
    information__2Load.innerHTML = "";

    const timezoneLoad = document.createElement('div');
    timezoneLoad.classList.add('load');
    timezoneLoad.innerHTML = `
        <p>Timezone: ${launchpadData.timezone}</p>
    `;
    information__2Load.appendChild(timezoneLoad);

    const dryMassLoad = document.createElement('div');
    dryMassLoad.classList.add('load');
    dryMassLoad.innerHTML = `
        <p>Region: ${launchpadData.region}</p>
    `;
    information__2Load.appendChild(dryMassLoad);

    const launchesLoad = document.createElement('div');
    launchesLoad.classList.add('load');
    launchesLoad.innerHTML = `
        <ul>Launches:
            ${launchpadData.launches.map(launch => `<li>${launch}</li>`).join('')}
        </ul>
    `;
    information__2Load.appendChild(launchesLoad);

    const informationTable1Load = document.querySelector("#information__table__1 .load");
    informationTable1Load.innerHTML = `
        <p>Latitude: ${launchpadData.latitude}</p>
        <p>Longitude: ${launchpadData.longitude}</p>
    `;
    informationTable1Load.classList.remove('hidden');

    informationTable1Load.style.display = 'flex';
    informationTable1Load.style.flexDirection = 'column';
    informationTable1Load.classList.remove('hidden');

    const informationTable2Load = document.querySelector("#information__table__2 .load");
    informationTable2Load.innerHTML = `
        <p>Launch Attempts: ${launchpadData.launch_attempts}</p>
        <p>Launch Successes: ${launchpadData.launch_successes}</p>
        <ul>Rockets:
            ${launchpadData.rockets.map(rocket => `<li>${rocket}</li>`).join('')}
        </ul>
    `;
    informationTable2Load.style.display = 'flex';
    informationTable2Load.style.flexDirection = 'column';
    informationTable2Load.classList.remove('hidden');
    
    const sectionImageLoad = document.querySelector("#section__image ");
    sectionImageLoad.innerHTML = `
        <img src="storage/img/icons/launchpads.jpg" style="width: 100%; height: 100%; object-fit: contain;">
    `;
    sectionImageLoad.classList.remove('hidden');
};


/*
  Actualización de la interfaz con la información de mis launchpads
*/

const getAllLaunchpads_ForId = async (e) => {
    e.preventDefault();
  
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = "";
        paginacion.append(await paginationLaunchpads(Number(e.target.dataset.page)));
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

    let launchpadData = extractLaunchpadData(launch);
    displayLaunchpadData(launchpadData);
  
    await launchpadfull_name(launch.full_name);
};

/**
 Paginacion de la seccion de mi historial de launchpads..
 */

 export const paginationLaunchpads = async(page=1, limit= 5)=>{  
     
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
const extractPayloadData = (payload) => {
    return {
        name: payload.name,
        type: payload.type,
        reused: payload.reused,
        launch: payload.launch,
        customers: payload.customers,
        norad_ids: payload.norad_ids,
        nationalities: payload.nationalities,
        manufacturers: payload.manufacturers,
        mass_kg: payload.mass_kg,
        mass_lbs: payload.mass_lbs,
        orbit: payload.orbit,
        reference_system: payload.reference_system,
        regime: payload.regime,
        longitude: payload.longitude,
        semi_major_axis_km: payload.semi_major_axis_km,
        eccentricity: payload.eccentricity,
        periapsis_km: payload.periapsis_km,
        apoapsis_km: payload.apoapsis_km,
        inclination_deg: payload.inclination_deg,
        period_min: payload.period_min,
        lifespan_years: payload.lifespan_years,
        epoch: payload.epoch,
        mean_motion: payload.mean_motion,
        raan: payload.raan,
        arg_of_pericenter: payload.arg_of_pericenter,
        mean_anomaly: payload.mean_anomaly,
        id: payload.id,
        dragon: payload.dragon
    };
};

const displayPayloadData = (payloadData) => {
    const section1Load = document.querySelector("#section__information__1 .load");
    section1Load.innerHTML = `
        <p>Name: ${payloadData.name}</p>
        <p>Type: ${payloadData.type}</p>
        <p>Reused: ${payloadData.reused}</p>
        <p>Launch: ${payloadData.launch}</p>
        <p>ID: ${payloadData.id}</p>
    `;
    section1Load.classList.remove('hidden');

    const information__2Load = document.querySelector("#information__2");
    information__2Load.innerHTML = "";

    const customersLoad = document.createElement('div');
    customersLoad.classList.add('load');
    customersLoad.innerHTML = `
        <ul>Customers:
            ${payloadData.customers.map(customer => `<li>${customer}</li>`).join('')}
        </ul>
    `;
    information__2Load.appendChild(customersLoad);

    const noradIdsLoad = document.createElement('div');
    noradIdsLoad.classList.add('load');
    noradIdsLoad.innerHTML = `
        <ul>NORAD IDs:
            ${payloadData.norad_ids.map(id => `<li>${id}</li>`).join('')}
        </ul>
    `;
    information__2Load.appendChild(noradIdsLoad);

    const nationalitiesLoad = document.createElement('div');
    nationalitiesLoad.classList.add('load');
    nationalitiesLoad.innerHTML = `
        <ul>Nationalities:
            ${payloadData.nationalities.map(nationality => `<li>${nationality}</li>`).join('')}
        </ul>
    `;
    information__2Load.appendChild(nationalitiesLoad);

    const manufacturersLoad = document.createElement('div');
    manufacturersLoad.classList.add('load');
    manufacturersLoad.innerHTML = `
        <ul>Manufacturers:
            ${payloadData.manufacturers.map(manufacturer => `<li>${manufacturer}</li>`).join('')}
        </ul>
    `;
    information__2Load.appendChild(manufacturersLoad);

    const orbitLoad = document.createElement('div');
    orbitLoad.classList.add('load');
    orbitLoad.innerHTML = `
        <p>Orbit: ${payloadData.orbit}</p>
        <p>Reference System: ${payloadData.reference_system}</p>
        <p>Regime: ${payloadData.regime}</p>
    `;
    information__2Load.appendChild(orbitLoad);

    const semiMajorAxisLoad = document.createElement('div');
    semiMajorAxisLoad.classList.add('load');
    semiMajorAxisLoad.innerHTML = `
        <p>Semi-Major Axis (km): ${payloadData.semi_major_axis_km}</p>
        <p>Eccentricity: ${payloadData.eccentricity}</p>
    `;
    information__2Load.appendChild(semiMajorAxisLoad);

    const periapsisApoapsisLoad = document.createElement('div');
    periapsisApoapsisLoad.classList.add('load');
    periapsisApoapsisLoad.innerHTML = `
        <p>Periapsis (km): ${payloadData.periapsis_km}</p>
        <p>Apoapsis (km): ${payloadData.apoapsis_km}</p>
    `;
    information__2Load.appendChild(periapsisApoapsisLoad);

    const inclinationLoad = document.createElement('div');
    inclinationLoad.classList.add('load');
    inclinationLoad.innerHTML = `
        <p>Inclination (deg): ${payloadData.inclination_deg}</p>
    `;
    information__2Load.appendChild(inclinationLoad);

    const periodLifespanLoad = document.createElement('div');
    periodLifespanLoad.classList.add('load');
    periodLifespanLoad.innerHTML = `
        <p>Period (min): ${payloadData.period_min}</p>
        <p>Lifespan (years): ${payloadData.lifespan_years}</p>
    `;
    information__2Load.appendChild(periodLifespanLoad);

    const epochLoad = document.createElement('div');
    epochLoad.classList.add('load');
    epochLoad.innerHTML = `
        <p>Epoch: ${payloadData.epoch}</p>
        <p>Mean Motion: ${payloadData.mean_motion}</p>
    `;
    information__2Load.appendChild(epochLoad);

    const raanLoad = document.createElement('div');
    raanLoad.classList.add('load');
    raanLoad.innerHTML = `
        <p>RAAN: ${payloadData.raan}</p>
    `;
    information__2Load.appendChild(raanLoad);

    const argOfPericenterLoad = document.createElement('div');
    argOfPericenterLoad.classList.add('load');
    argOfPericenterLoad.innerHTML = `
        <p>Argument of Pericenter: ${payloadData.arg_of_pericenter}</p>
    `;
    information__2Load.appendChild(argOfPericenterLoad);

    const meanAnomalyLoad = document.createElement('div');
    meanAnomalyLoad.classList.add('load');
    meanAnomalyLoad.innerHTML = `
        <p>Mean Anomaly: ${payloadData.mean_anomaly}</p>
    `;
    information__2Load.appendChild(meanAnomalyLoad);

    if (payloadData.dragon) {
        const dragonLoad = document.createElement('div');
        dragonLoad.classList.add('load');
        dragonLoad.innerHTML = `
            <p>Dragon Capsule: ${payloadData.dragon.capsule}</p>
            <p>Mass Returned (kg): ${payloadData.dragon.mass_returned_kg}</p>
            <p>Manifest: ${payloadData.dragon.manifest}</p>
            
        `;
        information__2Load.appendChild(dragonLoad);
    }

    const informationTable1Load = document.querySelector("#information__table__1 .load");
    informationTable1Load.innerHTML = `
        <p>Mass Returned (lbs): ${payloadData.dragon.mass_returned_lbs}</p>
        <p>Flight Time (sec): ${payloadData.dragon.flight_time_sec}</p>
    `;
    informationTable1Load.classList.remove('hidden');

    informationTable1Load.style.display = 'flex';
    informationTable1Load.style.flexDirection = 'column';
    informationTable1Load.classList.remove('hidden');

    const informationTable2Load = document.querySelector("#information__table__2 .load");
    informationTable2Load.innerHTML = `
        <p>Water Landing: ${payloadData.dragon.water_landing}</p>
        <p>Land Landing: ${payloadData.dragon.land_landing}</p>
    `;
    informationTable2Load.style.display = 'flex';
    informationTable2Load.style.flexDirection = 'column';
    informationTable2Load.classList.remove('hidden');

    const sectionImageLoad = document.querySelector("#section__image .load");
    sectionImageLoad.innerHTML = `
        <img src="storage/img/icons/payloads.jpg" style="width: 100%; height: 100%; object-fit: cover;">
    `;
    sectionImageLoad.classList.remove('hidden');
};
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
  
    let launchpadData = extractPayloadData(payload);
    displayPayloadData(launchpadData);

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

const extractRoadsterData = (roadster) => {
    return {
        flickr_images: roadster.flickr_images,
        name: roadster.name,
        launch_date_utc: roadster.launch_date_utc,
        launch_date_unix: roadster.launch_date_unix,
        launch_mass_kg: roadster.launch_mass_kg,
        launch_mass_lbs: roadster.launch_mass_lbs,
        norad_id: roadster.norad_id,
        epoch_jd: roadster.epoch_jd,
        orbit_type: roadster.orbit_type,
        apoapsis_au: roadster.apoapsis_au,
        periapsis_au: roadster.periapsis_au,
        semi_major_axis_au: roadster.semi_major_axis_au,
        eccentricity: roadster.eccentricity,
        inclination: roadster.inclination,
        longitude: roadster.longitude,
        periapsis_arg: roadster.periapsis_arg,
        period_days: roadster.period_days,
        speed_kph: roadster.speed_kph,
        speed_mph: roadster.speed_mph,
        earth_distance_km: roadster.earth_distance_km,
        earth_distance_mi: roadster.earth_distance_mi,
        mars_distance_km: roadster.mars_distance_km,
        mars_distance_mi: roadster.mars_distance_mi,
        wikipedia: roadster.wikipedia,
        video: roadster.video,
        details: roadster.details,
        id: roadster.id
    };
};

const displayRoadsterData = (roadsterData) => {
    const section1Load = document.querySelector("#section__information__1");
    section1Load.innerHTML = `
        <p>Name: ${roadsterData.name}</p>
        <p>Launch Date (UTC): ${roadsterData.launch_date_utc}</p>
        <p>Launch Date (Unix): ${roadsterData.launch_date_unix}</p>
        <p>Launch Mass (kg): ${roadsterData.launch_mass_kg}</p>
        <p>Launch Mass (lbs): ${roadsterData.launch_mass_lbs}</p>
        <p>ID: ${roadsterData.id}</p>
    `;
    section1Load.classList.remove('hidden');

    const information__2Load = document.querySelector("#information__2");
    information__2Load.innerHTML = "";

    const orbitLoad = document.createElement('div');
    orbitLoad.classList.add('load');
    orbitLoad.innerHTML = `
        <p>Orbit Type: ${roadsterData.orbit_type}</p>
        <p>Apoapsis (AU): ${roadsterData.apoapsis_au}</p>
        <p>Periapsis (AU): ${roadsterData.periapsis_au}</p>
    `;
    information__2Load.appendChild(orbitLoad);

    const informationTable1Load = document.querySelector("#information__table__1");
    informationTable1Load.innerHTML = `
        <p>Semi-Major Axis (AU): ${roadsterData.semi_major_axis_au}</p>
        <p>Eccentricity: ${roadsterData.eccentricity}</p>
        <p>Inclination: ${roadsterData.inclination}</p>
    `;
    informationTable1Load.classList.remove('hidden');

    const informationTable2Load = document.querySelector("#information__table__2");
    informationTable2Load.innerHTML = `
        <p>Longitude: ${roadsterData.longitude}</p>
        <p>Argument of Periapsis: ${roadsterData.periapsis_arg}</p>
        <p>Period (days): ${roadsterData.period_days}</p>
    `;
    informationTable2Load.style.display = 'flex';
    informationTable2Load.style.flexDirection = 'column';
    informationTable2Load.classList.remove('hidden');

    informationTable1Load.style.display = 'flex';
    informationTable1Load.style.flexDirection = 'column';
    informationTable1Load.classList.remove('hidden');

    const speedLoad = document.createElement('div');
    speedLoad.classList.add('load');
    speedLoad.innerHTML = `
        <p>Speed (kph): ${roadsterData.speed_kph}</p>
        <p>Speed (mph): ${roadsterData.speed_mph}</p>
    `;
    information__2Load.appendChild(speedLoad);

    const distanceLoad = document.createElement('div');
    distanceLoad.classList.add('load');
    distanceLoad.innerHTML = `
        <p>Earth Distance (km): ${roadsterData.earth_distance_km}</p>
        <p>Earth Distance (mi): ${roadsterData.earth_distance_mi}</p>
        <p>Mars Distance (km): ${roadsterData.mars_distance_km}</p>
        <p>Mars Distance (mi): ${roadsterData.mars_distance_mi}</p>
    `;
    information__2Load.appendChild(distanceLoad);

    const mediaLoad = document.createElement('div');
    mediaLoad.classList.add('load');
    mediaLoad.innerHTML = `
        <p>Wikipedia: <a href="${roadsterData.wikipedia}" target="_blank">${roadsterData.wikipedia}</a></p>
        <p>Video: <a href="${roadsterData.video}" target="_blank">${roadsterData.video}</a></p>
    `;
    information__2Load.appendChild(mediaLoad);

    const detailsLoad = document.createElement('div');
    detailsLoad.classList.add('load');
    detailsLoad.innerHTML = `
        <p>Details: ${roadsterData.details}</p>
    `;
    information__2Load.appendChild(detailsLoad);

    const sectionImageLoad = document.querySelector("#section__image");
    sectionImageLoad.innerHTML = roadsterData.flickr_images.map(image => `
        <img src="${image}" style="width: 100%; height: 100%; object-fit: cover; ">
    `).join('');
    sectionImageLoad.classList.remove('hidden');
};

export const paginationRoadster = async() => {
    let roadster = await getAllRoadster();  // Supongo que getAllRoadster() es una función que obtendrá los datos del roadster
    await clear();  // Supongo que clear() es una función que limpiará cualquier contenido existente
    let roadsterData = extractRoadsterData(roadster);
    displayRoadsterData(roadsterData);
    await roadName(roadsterData.name);  // Supongo que roadName es una función que realiza alguna operación con el nombre del roadster
};


const extractStarlinkData = (starlink) => {
    return {
        CCSDS_OMM_VERS: starlink.spaceTrack.CCSDS_OMM_VERS,
        COMMENT: starlink.spaceTrack.COMMENT,
        CREATION_DATE: starlink.spaceTrack.CREATION_DATE,
        ORIGINATOR: starlink.spaceTrack.ORIGINATOR,
        OBJECT_NAME: starlink.spaceTrack.OBJECT_NAME,
        OBJECT_ID: starlink.spaceTrack.OBJECT_ID,
        CENTER_NAME: starlink.spaceTrack.CENTER_NAME,
        REF_FRAME: starlink.spaceTrack.REF_FRAME,
        TIME_SYSTEM: starlink.spaceTrack.TIME_SYSTEM,
        MEAN_ELEMENT_THEORY: starlink.spaceTrack.MEAN_ELEMENT_THEORY,
        EPOCH: starlink.spaceTrack.EPOCH,
        MEAN_MOTION: starlink.spaceTrack.MEAN_MOTION,
        ECCENTRICITY: starlink.spaceTrack.ECCENTRICITY,
        INCLINATION: starlink.spaceTrack.INCLINATION,
        RA_OF_ASC_NODE: starlink.spaceTrack.RA_OF_ASC_NODE,
        ARG_OF_PERICENTER: starlink.spaceTrack.ARG_OF_PERICENTER,
        MEAN_ANOMALY: starlink.spaceTrack.MEAN_ANOMALY,
        EPHEMERIS_TYPE: starlink.spaceTrack.EPHEMERIS_TYPE,
        CLASSIFICATION_TYPE: starlink.spaceTrack.CLASSIFICATION_TYPE,
        NORAD_CAT_ID: starlink.spaceTrack.NORAD_CAT_ID,
        ELEMENT_SET_NO: starlink.spaceTrack.ELEMENT_SET_NO,
        REV_AT_EPOCH: starlink.spaceTrack.REV_AT_EPOCH,
        BSTAR: starlink.spaceTrack.BSTAR,
        MEAN_MOTION_DOT: starlink.spaceTrack.MEAN_MOTION_DOT,
        MEAN_MOTION_DDOT: starlink.spaceTrack.MEAN_MOTION_DDOT,
        SEMIMAJOR_AXIS: starlink.spaceTrack.SEMIMAJOR_AXIS,
        PERIOD: starlink.spaceTrack.PERIOD,
        APOAPSIS: starlink.spaceTrack.APOAPSIS,
        PERIAPSIS: starlink.spaceTrack.PERIAPSIS,
        OBJECT_TYPE: starlink.spaceTrack.OBJECT_TYPE,
        RCS_SIZE: starlink.spaceTrack.RCS_SIZE,
        COUNTRY_CODE: starlink.spaceTrack.COUNTRY_CODE,
        LAUNCH_DATE: starlink.spaceTrack.LAUNCH_DATE,
        SITE: starlink.spaceTrack.SITE,
        DECAY_DATE: starlink.spaceTrack.DECAY_DATE,
        DECAYED: starlink.spaceTrack.DECAYED,
        FILE: starlink.spaceTrack.FILE,
        GP_ID: starlink.spaceTrack.GP_ID,
        TLE_LINE0: starlink.spaceTrack.TLE_LINE0,
        TLE_LINE1: starlink.spaceTrack.TLE_LINE1,
        TLE_LINE2: starlink.spaceTrack.TLE_LINE2,
        version: starlink.version,
        launch: starlink.launch,
        longitude: starlink.longitude,
        latitude: starlink.latitude,
        height_km: starlink.height_km,
        velocity_kms: starlink.velocity_kms,
        id: starlink.id
    };
};


const displayStarlinkData = (starlinkData) => {
    // Mostrar solo 3 datos en section__information__1
    const section1Load = document.querySelector("#section__information__1");
    section1Load.innerHTML = `
        <p>Object Name: ${starlinkData.OBJECT_NAME}</p>
        <p>Object ID: ${starlinkData.OBJECT_ID}</p>
        <p>Launch Date: ${starlinkData.LAUNCH_DATE}</p>
    `;
    section1Load.classList.remove('hidden');

    const descriptionItemLoad = document.querySelector(".description__item");
    descriptionItemLoad.innerHTML = `
        <div class="load">
            <p>BSTAR: ${starlinkData.BSTAR}</p>
        </div>
        <div class="load">
            <p>Mean Motion Dot: ${starlinkData.MEAN_MOTION_DOT}</p>
        </div>
        <div class="load">
            <p>Mean Motion Double Dot: ${starlinkData.MEAN_MOTION_DDOT}</p>
        </div>
        <div class="load">
            <p>Semi-major Axis: ${starlinkData.SEMIMAJOR_AXIS}</p>
        </div>
        <div class="load">
            <p>Period: ${starlinkData.PERIOD}</p>
        </div>
        <div class="load">
            <p>Apoapsis: ${starlinkData.APOAPSIS}</p>
        </div>
        <div class="load">
            <p>Periapsis: ${starlinkData.PERIAPSIS}</p>
        </div>
    `;

    // Crear contenedores y asignar datos para information__2Load
    const information__2Load = document.querySelector("#information__2");
    information__2Load.innerHTML = "";

    const basicDataLoad = document.createElement('div');
    basicDataLoad.classList.add('load');
    basicDataLoad.innerHTML = `
        <p>CCSDS OMM Version: ${starlinkData.CCSDS_OMM_VERS}</p>
        <p>Comment: ${starlinkData.COMMENT}</p>
        <p>Creation Date: ${starlinkData.CREATION_DATE}</p>
    `;
    information__2Load.appendChild(basicDataLoad);

    const additionalDataLoad = document.createElement('div');
    additionalDataLoad.classList.add('load');
    additionalDataLoad.innerHTML = `
        <p>Originator: ${starlinkData.ORIGINATOR}</p>
        <p>Center Name: ${starlinkData.CENTER_NAME}</p>
        <p>Reference Frame: ${starlinkData.REF_FRAME}</p>
    `;
    information__2Load.appendChild(additionalDataLoad);

    const moreDataLoad = document.createElement('div');
    moreDataLoad.classList.add('load');
    moreDataLoad.innerHTML = `
        <p>Time System: ${starlinkData.TIME_SYSTEM}</p>
        <p>Mean Element Theory: ${starlinkData.MEAN_ELEMENT_THEORY}</p>
        <p>Epoch: ${starlinkData.EPOCH}</p>
    `;
    information__2Load.appendChild(moreDataLoad);

    // Crear contenedores y asignar datos para informationTable1Load
    const informationTable1Load = document.querySelector("#information__table__1");
    informationTable1Load.innerHTML = `
        <p>Mean Motion: ${starlinkData.MEAN_MOTION}</p>
        <p>Eccentricity: ${starlinkData.ECCENTRICITY}</p>
        <p>Inclination: ${starlinkData.INCLINATION}</p>
        <p>RA of Ascending Node: ${starlinkData.RA_OF_ASC_NODE}</p>
        <p>Argument of Pericenter: ${starlinkData.ARG_OF_PERICENTER}</p>
        <p>Mean Anomaly: ${starlinkData.MEAN_ANOMALY}</p>
    `;
    informationTable1Load.classList.remove('hidden');

    informationTable1Load.style.display = 'flex';
    informationTable1Load.style.flexDirection = 'column';
    informationTable1Load.classList.remove('hidden');

    // Crear contenedores y asignar datos para informationTable2Load
    const informationTable2Load = document.querySelector("#information__table__2");
    informationTable2Load.innerHTML = `
        <p>Ephemeris Type: ${starlinkData.EPHEMERIS_TYPE}</p>
        <p>Classification Type: ${starlinkData.CLASSIFICATION_TYPE}</p>
        <p>NORAD Catalog ID: ${starlinkData.NORAD_CAT_ID}</p>
        <p>Element Set Number: ${starlinkData.ELEMENT_SET_NO}</p>
        <p>Revolutions at Epoch: ${starlinkData.REV_AT_EPOCH}</p>
        
    `;
    informationTable2Load.classList.remove('hidden');

    informationTable2Load.style.display = 'flex';
    informationTable2Load.style.flexDirection = 'column';
    informationTable2Load.classList.remove('hidden');

    // Añadir más datos a information__2Load
    const objectTypeLoad = document.createElement('div');
    objectTypeLoad.classList.add('load');
    objectTypeLoad.innerHTML = `
        <p>Object Type: ${starlinkData.OBJECT_TYPE}</p>
        <p>RCS Size: ${starlinkData.RCS_SIZE}</p>
        <p>Country Code: ${starlinkData.COUNTRY_CODE}</p>
    `;
    information__2Load.appendChild(objectTypeLoad);

    const locationLoad = document.createElement('div');
    locationLoad.classList.add('load');
    locationLoad.innerHTML = `
        <p>Longitude: ${starlinkData.longitude}</p>
        <p>Latitude: ${starlinkData.latitude}</p>
        <p>Height (km): ${starlinkData.height_km}</p>
        <p>Velocity (km/s): ${starlinkData.velocity_kms}</p>
    `;
    information__2Load.appendChild(locationLoad);

    const additionalInfoLoad = document.createElement('div');
    additionalInfoLoad.classList.add('load');
    additionalInfoLoad.innerHTML = `
        <p>Decay Date: ${starlinkData.DECAY_DATE}</p>
        <p>Decayed: ${starlinkData.DECAYED}</p>
        <p>File: ${starlinkData.FILE}</p>
        <p>GP ID: ${starlinkData.GP_ID}</p>
        <p>TLE Line 0: ${starlinkData.TLE_LINE0}</p>
        <p>TLE Line 1: ${starlinkData.TLE_LINE1}</p>
        <p>TLE Line 2: ${starlinkData.TLE_LINE2}</p>
        <p>Version: ${starlinkData.version}</p>
        <p>Launch: ${starlinkData.launch}</p>
        <p>ID: ${starlinkData.id}</p>
    `;
    information__2Load.appendChild(additionalInfoLoad);

    const sectionImageLoad = document.querySelector("#section__image ");
    sectionImageLoad.innerHTML = `
        <img src="storage/img/icons/deathStar.jpg" style="width: 100%; height: 100%; object-fit: contain;">
    `;
    sectionImageLoad.classList.remove('hidden');
};


/*
  Actualización de la interfaz con la información de mis starlinks
*/

const getAllStarlinks_ForId = async (e) => {
    e.preventDefault();

    if (e.target.dataset.page) {
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

    let starlink = await getAllstarlink_Id(e.target.id);
    console.log(starlink);

    let starlinkData = extractStarlinkData(starlink);
    displayStarlinkData(starlinkData);
    await starlinkName(starlinkData.OBJECT_NAME);
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
    start.addEventListener("click", getAllStarlinks_ForId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllStarlinks_ForId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllStarlinks_ForId)
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