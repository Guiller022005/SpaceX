export const informationRockets = async(country, description)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Description: "
    let small = document.createElement('small');
    small.textContent = description
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationLaunchCostRocket = async(cost_per_launch)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The estimated cost per rocket launch"
    let small = document.createElement('small');
    let money = new Intl.NumberFormat('cop').format(cost_per_launch)
    small.textContent = `$ ${money}`
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationFirstFlightRocket = async(first_flight)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The date of the first flight of the rocket"
    let small = document.createElement('small');
    small.textContent = first_flight
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationWebRocket = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about the coete"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}

export const capsulesIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/rocket.svg")

    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}

export const capsulesType = async (type) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    


// codigos del lado izquierdo


    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; // Agregar espacio inferior
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/type.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Type:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    let small = document.createElement('small');
    small.textContent = type;
    small.style.color = "white"; 
    small.style.marginLeft = "20px";// Establecer el color del texto en blanco
    divLast.appendChild(small);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}

export const crewIdPage  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/rocket.svg")

    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}

export const crewmission = async (mission) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    
    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; // Agregar espacio inferior
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/type.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Mission:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    if (Array.isArray(mission) && mission.length > 0) {
        let ul = document.createElement('ul');
        launches.forEach((launchId) => {
            let li = document.createElement('li');
            let small = document.createElement('small');
            small.textContent = launchId;
            li.appendChild(small);
            ul.appendChild(li);
        });
        divLast.appendChild(ul);
    } else {
        // Si solo hay una launch
        let small = document.createElement('small');
        small.textContent = launches;
        divLast.appendChild(small);
    }

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    return div;
}

export const crewWiki = async (wikipedia) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/wiki.svg");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Wikipedia:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    // Crear un enlace (<a>) para el texto de Wikipedia
    let wikipediaLink = document.createElement('a');
    wikipediaLink.textContent = wikipedia;
    wikipediaLink.style.color = "white"; // Establecer el color del texto en blanco
    wikipediaLink.style.marginLeft = "20px";
    wikipediaLink.style.textDecoration = "underline"; // Subrayar el enlace
    wikipediaLink.href = wikipedia; // Establecer el atributo href con el enlace de Wikipedia
    wikipediaLink.style.fontSize = "9px";
    // Abrir el enlace en una nueva pestaña
    wikipediaLink.target = "_blank";

    // Agregar el enlace al contenedor
    divLast.appendChild(wikipediaLink);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}