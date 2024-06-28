export const getAllCrew = async(page, limit)=>{
    let config = {
        Headers:{
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
    
    let res = await fetch("https://api.spacexdata.com/v4/crew/query",config)
    let data = await res.json();
    console.log(data);
    return data;
}


export const getCrew = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/crew")
    let data = await res.json();
    return data;
}

export const getAllCrew_Id = async(id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/crew/${id}`)
    let data = await res.json();
    return data;
}