export const getAllShips  = async(page, limit) =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                page,
                limit
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/ships/query", config);
    let data = await res.json();
    return data;
}

export const getAllships_Id = async(id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/ships/${id}`);
    let data = await res.json();
    return data;
}