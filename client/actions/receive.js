export const RECEIVE_TIPS = 'RECEIVE_TIPS'
export const RECEIVE_TUTORIALS = 'RECEIVE_TUTORIALS'
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'

export const receiveTips = (tips) => {
    return {
        type: RECEIVE_TIPS,
        tips: tips.map(tip => tip.data)
    }
}

export const receiveTutorials = (tutorials) => {
    return {
        type: RECEIVE_TUTORIALS,
        tutorials: tutorials.map(tutorial => tutorial.data)
    }
}

export const receiveArticles = (articles) => {
    return {
        type: RECEIVE_ARTICLES,
        articles: articles.map(article => article.data)
    }
}