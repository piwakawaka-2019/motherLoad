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
        .get("/api/resources/pureinfotech")
        .then(res => res.body)
        .catch(err => {
            console.log("Web Scrapping API issues", err)
        });
};

export function getTomshardwareData () {
    return request 
        .get("/api/resources/tomshardware")
        .then(res => res.body)
        .catch(err => {
            console.log("Web Scrapping API issues", err)
        });
};

export function getExtremetechData () {
    return request 
        .get("/api/resources/extremetech")
        .then(res => res.body)
        .catch(err => {
            console.log("Web Scrapping API issues", err)
        });
};

export function getFurenexoData () {
    return request 
        .get("/api/resources/furenexo")
        .then(res => res.body)
        .catch(err => {
            console.log("Web Scrapping API issues", err)
        });
};

export function getPcgamerData () {
    return request 
        .get("/api/resources/pcgamer")
        .then(res => res.body)
        .catch(err => {
            console.log("Web Scrapping API issues", err)
        });
};

export function getLaptopmagData () {
    return request 
        .get("/api/resources/laptopmag")
        .then(res => res.body)
        .catch(err => {
            console.log("Web Scrapping API issues", err)
        });
};