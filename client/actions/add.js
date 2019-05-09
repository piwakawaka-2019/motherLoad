export const ADD_TIP = 'ADD_TIP'
export const ADD_TUTORIAL = 'ADD_TUTORIAL'

export const addTip = (tip) => {
    return {
        type: ADD_TIP
    }
}

export const addTutorial = (tutorial) => {
    return {
        type: ADD_TUTORIAL,
        tutorial: tutorial
    }
}