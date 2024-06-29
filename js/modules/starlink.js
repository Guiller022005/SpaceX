export const getAll_starlinks = async(page, limit) =>{
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
    let res = await fetch("https://api.spacexdata.com/v4/starlink/query", config);
    let data = await res.json();
    return data;
}

export const getAllstarlink_Id = async(id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/starlink/${id}`);
    let data = await res.json();
    return data;
}