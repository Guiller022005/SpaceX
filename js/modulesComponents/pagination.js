import { 
    getAllRockets, 
    getAllRocketsId
} from "../modules/rockets.js";
import { 
    nameRockets,
    capsulesName
} from "./title.js";
import { 
    informationRockets,
    informationLaunchCostRocket,
    informationFirstFlightRocket,
    informationWebRocket,
    
} from "./information.js";
import { 
    tableRocketColum1, 
    tableRocketColum2
} from "./tables.js";
import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum
} from "./inform.js";
import { 
    imageRockets 
} from "./card.js";
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

const getId_Capsules = async (e) => {
    e.preventDefault();
  
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCapsules(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let p1 = paginacion.children[0].children[1]
            
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
  
    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";
  
    await capsulesName(capsules.serial);
    let lastUpdateElement = await lastUpdate(capsules.last_update);
    description__item.append(lastUpdateElement);
  
    let capsules_IdOfPageElement = await capsules_IdOfPage(capsules.id);
    description__item.append(capsules_IdOfPageElement);
  
    let capsulesLaunchesElement = await capsulesLaunches(capsules.launches);

    let sectionImage = document.querySelector("#section__information__1");
    sectionImage.innerHTML = "";
    
    // Crea la nueva imagen y agrégala a sectionImage
    let img = document.createElement("img");
    img.setAttribute("src", "storage/img/icons/capsul.gif");
    img.classList.add("imagen-paginacion-capsula");
    
    // Agrega estilos para posición absoluta
    img.style.position = "absolute";
    img.style.top = "100px"; // Ajusta la posición vertical
    img.style.left = "-20px"; // Ajusta la posición horizontal
    img.style.width = "400px";
    img.style.height = "400px";
    img.style.marginTop = "120px";
    img.style.marginLeft = "285px";
    
    sectionImage.appendChild(img);
  
    // Asegurarse de que capsulesTypeElement se agregue al lugar correcto
    let capsulesTypeElement = await capsulesType(capsules.type);
    let information__2 = document.getElementById('information__2'); // Asegúrate de que este sea el contenedor correcto
    information__2.innerHTML = ""; // Limpia el contenido actual si es necesario
    information__2.appendChild(capsulesTypeElement); // Adjunta el elemento generado por capsulesType a information__2
  
    // Asegurarse de que capsulesStatusElement se agregue al lugar correcto
    let capsulesStatusElement = await capsulesStatus(capsules.status);
    information__2.appendChild(capsulesStatusElement); // Adjunta el elemento generado por capsulesStatus a information__2
  
  // Mostrar información de cápsulas en la tabla
  let information__table__1 = document.querySelector("#information__table__1");
  information__table__1.innerHTML = "";
  let h3 = document.createElement("h3");
  h3.textContent = "Capsule information";
  let hr = document.createElement("hr");
  information__table__1.append(h3, hr);

  let div = document.createElement("div");
  div.classList.add("table__container__1");

  let div1 = document.createElement("div");
  let span1 = document.createElement("span");
  span1.textContent = "Type";
  let strong1 = document.createElement("strong");
  strong1.textContent = `${capsules.type}`;
  div1.append(span1, strong1);

  let div2 = document.createElement("div");
  let span2 = document.createElement("span");
  span2.textContent = "Reuse count";
  let strong2 = document.createElement("strong");
  strong2.textContent = `${capsules.reuse_count}`;
  div2.append(span2, strong2);

  div.append(div1, div2);
  information__table__1.append(div);

  // Obtener y mostrar información de water_landings y land_landings
  const { water_landings, land_landings } = await tableCapsulesColum2(capsules);

  let information__table__2 = document.querySelector("#information__table__2");
  information__table__2.innerHTML = "";
  let h3_2 = document.createElement("h3");
  h3_2.textContent = "Capsule Landings Information";
  let hr_2 = document.createElement("hr");
  information__table__2.append(h3_2, hr_2);

  let div_2 = document.createElement("div");
  div_2.classList.add("table__container__1");

  let div1_2 = document.createElement("div");
  let span1_2 = document.createElement("span");
  span1_2.textContent = "Water Landings";
  let strong1_2 = document.createElement("strong");
  strong1_2.textContent = water_landings;
  div1_2.append(span1_2, strong1_2);

  let div2_2 = document.createElement("div");
  let span2_2 = document.createElement("span");
  span2_2.textContent = "Land Landings";
  let strong2_2 = document.createElement("strong");
  strong2_2.textContent = land_landings;
  div2_2.append(span2_2, strong2_2);

  div_2.append(div1_2, div2_2);
  information__table__2.append(div_2);
};

export const paginationCapsules = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCapsules(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getId_Capsules)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getId_Capsules)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getId_Capsules)
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