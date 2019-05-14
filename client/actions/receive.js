import { getTips,
getTutorials } from "../apis/resources";

export const GET_TIP = 'GET_TIP'
export const GET_TUTORIAL = 'GET_TUTORIAL' 


export function saveTips(tips){
    return {
        type: GET_TIP,
        tips
    }
}

export function fetchTips(){
    return function(dispatch){
        getTips()
        .then(tips => {
            dispatch(saveTips(tips))
        })

    }
}

export function saveTutorials(tutorials){
    return {
        type: GET_TUTORIAL,
        tutorials
    }
}

export function fetchTutorials(){
    return function(dispatch){
        getTutorials()
        .then(tutorials => {
            dispatch(saveTutorials(tutorials))
        })

    }
}
