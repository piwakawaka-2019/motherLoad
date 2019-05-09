import request from "superagent";

export function getAllResources() {
    return request
    .get("v1/resources")
}