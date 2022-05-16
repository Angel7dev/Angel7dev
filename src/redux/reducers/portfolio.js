import * as types from '../actions/types'

const initial_state = {
    Exp: [],
    Projects: [],
    Layout_projects: [],
    Skills: [],
    error: [],

}


const portfolio = (state = initial_state, actions) => {
    const { type, payload } = actions
    switch (type) {
        case types.GET_EXP_SUCCESS:
            return { ...state, Exp: payload }

        case types.GET_PROJECTS_SUCCESS:
            return { ...state, Projects: payload }


        case types.GET_SKILLS_SUCCESS:
            return { ...state, Skills: payload }


        case types.GET_LAYOUT_PROJECTS_SUCCESS:

            return { ...state, Layout_projects: payload }

        default:
            return state;
    }
}

export default portfolio