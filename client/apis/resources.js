import request from "superagent";

export function getAllResources() {
    return request
    .get("v1/resources")
}

export function getTips () {
    return request
        .get("/api/resources/tips")
        .then(res => res.body)
        .catch(err => {
            console.error("Tip API issues", err)
        });
};

export function getTutorials () {
    return request
        .get("/api/resources/tutorials")
        .then(res => res.body)
        .catch(err => {
            console.error("Tip API issues", err)
        });
};

export function getDataByCategory (arr) {
    return request
        .get("/api/categories/category/" + arr)
        .then(res => res.body)
        .catch(err => {
            console.error("Tip API issues", err)
        });
}

export function getPureinfotechData () {
    return request 
        .get("/api/scrapping/pureinfotech")
        .then(res => res.body)
        .catch(err => {
            console.log("Web Scrapping API issues", err)
        });
};

export function getTomshardwareData () {
    return request 
        .get("/api/scrapping/tomshardware")
        .then(res => res.body)
        .catch(err => {
            console.log("Web Scrapping API issues", err)
        });
};

export function getExtremetechData () {
    return request 
        .get("/api/scrapping/extremetech")
        .then(res => res.body)
        .catch(err => {
            console.log("Web Scrapping API issues", err)
        });
};

export function getFurenexoData () {
    return request 
        .get("/api/scrapping/furenexo")
        .then(res => res.body)
        .catch(err => {
            console.log("Web Scrapping API issues", err)
        });
};

export function getPcgamerData () {
    return request 
        .get("/api/scrapping/pcgamer")
        .then(res => res.body)
        .catch(err => {
            console.log("Web Scrapping API issues", err)
        });
};

export function getLaptopmagData () {
    return request 
        .get("/api/scrapping/laptopmag")
        .then(res => res.body)
        .catch(err => {
            console.log("Web Scrapping API issues", err)
        });
};

export function getCatagories(){
    return request
    .get("/api/categories/get-category")
    .then(res => res.body)
    .catch(err => {
        console.error("Tip API issues", err)
    });
}
export function addDataToDB (data){
    return request
    .post("/api/post/add")
    .send(data)
    
}
export function getPostsByUser (user){
    return request
    .get("/api/resources/byuser/" + user)
    .then(res => res.body)
    .catch(err => {
        console.error("Tip API issues", err)
    });
}
export function addPostsByUser (userName, id){
    let data = {name: userName, id: id}
    return request
    .post("/api/post/savepoststouser")
    .send(data)
}
export function deletePostFromUser (userName, id){
    let data = {name: userName, id: id}
    return request
    .post("/api/post/deletepostfromuser")
    .send(data)
}