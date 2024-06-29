export const getAllLandpads  = async(page, limit) =>{
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
    let res = await fetch("https://api.spacexdata.com/v4/landpads/query", config);
    let data = await res.json();
    return data;
}

export const getAllLandpad_Id = async(id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/landpads/${id}`);
    let data = await res.json();
    return data;
}