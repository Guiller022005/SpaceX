export const getAll_roadster  = async(page, limit) =>{
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
    let res = await fetch("https://api.spacexdata.com/v4/roadster/query", config);
    let data = await res.json();
    return data;
}

export const getAllRoadster_Id = async(id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/roadster/${id}`);
    let data = await res.json();
    return data;
}

export const getAllRoadster = async () => {
    const response = await fetch("https://api.spacexdata.com/v4/roadster");
    const data = await response.json();
    return data;
}