import * as types from '../actions/types'

const initial_state = {
    Exp: [],
    Projects: [],
    Skills: [],
    error: []

}


const portfolio = (state = initial_state, actions) => {
    const { type, payload } = actions
    switch (type) {
        case types.GET_EXP_SUCCESS:
            return { ...state, Exp: payload }
        case types.GET_EXP_FAIL:
            return { ...state, error: payload }

        case types.GET_PROJECTS_SUCCESS:
            return { ...state, Projects: payload }
        case types.GET_PROJECTS_FAIL:
            return { ...state }

        case types.GET_SKILLS_SUCCESS:
            return { ...state, Skills: payload }
        case types.GET_SKILLS_FAIL:
            return { ...state}

        default:
            return state;
    }
}

export default portfolio