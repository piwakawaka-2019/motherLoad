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
export function getCatagories(){
    return request
    .get("/api/categories/get-category")
    .then(res => res.body)
    .catch(err => {
        console.error("Tip API issues", err)
    });
}