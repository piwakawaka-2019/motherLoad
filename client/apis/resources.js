import request from "superagent";

export function getAllResources() {
  return request.get("v1/resources");
}

export function getTips() {
  return request
    .get("/api/resources/tips")
    .then(res => res.body)
    .catch(err => {
      console.error("Tip API issues", err);
    });
}

export function getTutorials() {
  return request
    .get("/api/resources/tutorials")
    .then(res => res.body)
    .catch(err => {
      console.error("Tip API issues", err);
    });
}

export function getDataByCategory(arr, location) {
  return request
    .get("/api/categories/category/" + arr + '/'+ location)
    .then(res => res.body)
    .catch(err => {
      console.error("Tip API issues", err);
    });
}

export function getArticleData () {
    return request 
        .get("/api/resources/articles")
        .then(res => res.body)
        .catch(err => {
            console.error("Article API issues", err)
        });
}

export function getCatagories() {
  return request
    .get("/api/categories/get-category")
    .then(res => res.body)
    .catch(err => {
      console.error("Tip API issues", err);
    });
}
export function addDataToDB(data) {
  return request
  .post("/api/post/add")
  .send(data)
  .then(res => res.body)
}
export function getPostsByUser(user) {
  return request
    .get("/api/resources/byuser/" + user)
    .then(res => res.body)
    .catch(err => {
      console.error("Tip API issues", err);
    });
}
export function addPostsByUser(userName, id) {
  let data = { name: userName, id: id };
  return request
  .post("/api/post/savepoststouser")
  .send(data)
  .then(res => res.body)
}
export function deletePostFromUser(userName, id) {
  let data = { name: userName, id: id };
  return request
  .post("/api/post/deletepostfromuser")
  .send(data)
  .then(res => res.body)
  .then()
}
