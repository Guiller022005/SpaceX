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
    document.querySelector("#section__information__1 .load").innerHTML = `
      <p>Type: ${capsuleData.type}</p>
      <p>Status: ${capsuleData.status}</p>
      <p>id: ${capsuleData.id}</p>
    `;
    

    let information2Divs = document.querySelectorAll("#information__2 .load");
    information2Divs[0].innerHTML = `<p>Reuse Count: ${capsuleData.reuse_count}</p>`;
    information2Divs[1].innerHTML = `<p>Water Landings: ${capsuleData.water_landings}</p>`;
    information2Divs[2].innerHTML = `<p>Land Landings: ${capsuleData.land_landings}</p>`;

    document.querySelector("#section__image .load").innerHTML = `
    <img src="storage/img/icons/capsulas.jpg" style="width: 100%; height: 100%; object-fit: cover;">`;

    document.querySelector("#information__table__1 .load").innerHTML = `
      <p>Launches: ${capsuleData.launches}</p>
    `;

    document.querySelector("#information__table__2 .load").innerHTML = `
      <p>Last Update: ${capsuleData.last_update}</p>
    `;
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

/*
  Actualización de la interfaz con la información de mi tripulacion
*/

const getCrewId = async (e) => {
    e.preventDefault();
  
    if(e.target.dataset.page){
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
  
    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";
  
    await crewNames(crew.name);
};

/**
 Paginacion de la seccion de mis capsulas..
*/


export const paginationCrew = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCrew(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCrewId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCrewId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCrewId)
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