export const genericFetch = async (method, apiLink, postBody) => {
    let returnData = {
        "data":null,
        "status":null,
        "msg":null,
        "ok":false
    }
    let requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
    };
    if(method !== "GET"){
        requestOptions["body"] = JSON.stringify(postBody);
    }
    return new Promise((resolve, reject) =>{
    fetch(apiLink, requestOptions)
        .then((response) => { 
            returnData.status = response.status;
            if(!response.ok){
                returnData.msg = "Internal Server Error " + response.status;
                resolve(returnData);
            }
            return response.json().then((data) => {
                returnData.msg = data.msg;
                returnData.data = data.data;
                returnData.ok = true;
                resolve(returnData);
            }).catch((err) => {
                returnData.msg = "Malformed Data";
                resolve(returnData);
            }) 
        }).catch((err) => {
            returnData.msg = "Error Connecting to Server";
            resolve(returnData);
        });
    });
}

export const genericFetchMod = async (method, apiLink, postBody) => {
    let returnData = {
        "data":null,
        "status":null,
        "msg":null,
        "ok":false
    }
    let requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body:postBody
    };
    return new Promise((resolve, reject) =>{
    fetch(apiLink, requestOptions)
        .then((response) => { 
            returnData.status = response.status;
            if(!response.ok){
                returnData.msg = "Internal Server Error " + response.status;
                resolve(returnData);
            }
            return response.json().then((data) => {
                returnData.msg = data.msg;
                returnData.data = data.data;
                returnData.ok = true;
                resolve(returnData);
            }).catch((err) => {
                returnData.msg = "Malformed Data";
                resolve(returnData);
            }) 
        }).catch((err) => {
            console.log(err);
            returnData.msg = "Error Connecting to Server";
            resolve(returnData);
        });
    });
}