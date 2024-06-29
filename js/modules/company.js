export const getAllCompanys = async(page, limit) =>{
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
    let res = await fetch("https://api.spacexdata.com/v4/company/query", config);
    let data = await res.json();
    return data;
}


export const getAllCompany_Id = async(id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/company/${id}`);
    let data = await res.json();
    return data;
}

export const getAllCompany = async()=>{
    let res = await fetch(`https://api.spacexdata.com/v4/company`);
    let data = await res.json();
    return data;
}