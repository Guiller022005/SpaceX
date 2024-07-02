import { 
    load,
    paginationRockets,
    paginationCapsules,
    paginationCrew,
    paginationLaunche,
    paginationCore,
    paginationLandpad,
    paginationShips,
    paginationCompany,
    paginationDrago,
    paginationHistories,
    paginationLaunches,
    paginationPayoades,
    paginationRoadster,
    paginationStarlinks
} from "./modulesComponents/pagination.js";

let footerSelect = async(e, id)=>{
    e.preventDefault();
    await load();
    let li = document.querySelectorAll(".footer ul li")
    for(let val of li){
        let [a] = val.children
        a.classList.remove('select');
    }
    let [a] = id.children
    a.classList.add('select');   
}


let rocket = document.querySelector("#rocket")
rocket.addEventListener("click", async(e)=>{
    await footerSelect(e, rocket)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
} )

let capsules = document.querySelector("#capsules")
capsules.addEventListener("click", async(e)=>{
    await footerSelect(e, capsules)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCapsules())
})

let crew = document.querySelector("#crew")
crew.addEventListener("click", async(e)=>{
    await footerSelect(e, crew)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCrew())
})

let launches = document.querySelector("#launches")
launches.addEventListener("click", async(e)=>{
    await footerSelect(e, launches)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLaunche())
})

let cores = document.querySelector("#cores")
cores.addEventListener("click", async(e)=>{
    await footerSelect(e, cores)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCore())
})

let landpad = document.querySelector("#landpads")
landpad.addEventListener("click", async(e)=>{
    await footerSelect(e, landpad)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLandpad())
})

let ships = document.querySelector("#ships")
ships.addEventListener("click", async(e)=>{
    await footerSelect(e, ships)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationShips())
})

let company = document.querySelector("#company")
company.addEventListener("click", async(e)=>{
    await footerSelect(e, company)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCompany())
})

let chimuelo = document.querySelector("#dragons")
chimuelo.addEventListener("click", async(e)=>{
    await footerSelect(e, chimuelo)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationDrago())
})

let history = document.querySelector("#history")
history.addEventListener("click", async(e)=>{
    await footerSelect(e, history)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationHistories())
})

let launch = document.querySelector("#launchpads")
launch.addEventListener("click", async(e)=>{
    await footerSelect(e, launch)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLaunches())
})

let payload = document.querySelector("#payloads")
payload.addEventListener("click", async(e)=>{
    await footerSelect(e, payload)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationPayoades())
})

let roadster = document.querySelector("#roadster")
roadster.addEventListener("click", async(e)=>{
    await footerSelect(e, roadster)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRoadster())
})

let starl = document.querySelector("#starlink")
starl.addEventListener("click", async(e)=>{
    await footerSelect(e, starl)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationStarlinks())
})

cores.click();