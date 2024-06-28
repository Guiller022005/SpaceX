export const nameRockets = async(name)=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = "";
    header__title.textContent = name;
    if (header__title.rainbowInterval) {
        clearInterval(header__title.rainbowInterval);
    }
}

export const capsulesName = async (serial) => {
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = "";
    header__title.textContent = serial;
    if (header__title.rainbowInterval) {
        clearInterval(header__title.rainbowInterval);
    }

}