import { getTips,
getTutorials, 
// getPureinfotechData,
// getTomshardwareData,
// getExtremetechData,
// getFurenexoData,
// getPcgamerData,
// getLaptopmagData,
// getArticleData,
getArticleData} from "../apis/resources";

export const GET_TIP = 'GET_TIP'
export const GET_TUTORIAL = 'GET_TUTORIAL' 
export const SAVE_ARTICLES = 'SAVE_ARTICLES'


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

export function saveArticles(articles){
    return {
        type: SAVE_ARTICLES,
        articles
    }
}

// export function fetchPureinfotechData(){
//     return function(dispatch){
//         getPureinfotechData()
//         .then(articles => {
//             dispatch(saveArticles([articles]))
//         })
//     }
// }

// export function fetchTomshardwareData() {
//     return function(dispatch){
//         getTomshardwareData()
//         .then(articles => {
//             dispatch(saveArticles([articles]))
//         })
//     }
// }

// export function fetchExtremetechData(){
//     return function(dispatch){
//         getExtremetechData()
//         .then(articles => {
//             dispatch(saveArticles([articles]))
//         })
//     }
// }

// export function fetchFurenexoData(){
//     return function(dispatch){
//         getFurenexoData()
//         .then(articles => {
//             dispatch(saveArticles([articles]))
//         })
//     }
// }

// export function fetchPcgamerData(){
//     return function(dispatch){
//         getPcgamerData()
//         .then(articles => {
//             dispatch(saveArticles([articles]))
//         })
//     }
// }

// export function fetchLaptopmagData(){
//     return function(dispatch){
//         getLaptopmagData()
//         .then(articles => {
//             dispatch(saveArticles([articles]))
//         })
//     }
// }

export function fetchArticleData () {
    return ((dispatch) => {
        getArticleData()
        .then(articles => {
            dispatch(saveArticles(articles))
        })
    })
}
