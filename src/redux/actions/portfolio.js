import * as types from './types'

export const getExpAction = () => async dispatch => {

    try {
        const resp = await fetch(`/api/localdata/exp/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json()

        if(resp.status === 200){
            dispatch({
                type: types.GET_EXP_SUCCESS,
                payload: data.success
            })

        }else{
            console.log("no get exp error :", data.error)
            dispatch({
                type: types.GET_EXP_FAIL,
                payload: data.error
            })
        }

    } catch (error) {
        console.log(error)
    }
}
export const getProjectsAction = () => async dispatch => {

    try {
        const resp = await fetch(`/api/localdata/projects/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json()

        if(resp.status === 200){
            dispatch({
                type: types.GET_PROJECTS_SUCCESS,
                payload: data.success
            })

        }else{
            console.log("no get exp error :", data.error)
            dispatch({
                type: types.GET_PROJECTS_FAIL,
                payload: data.error
            })
        }

    } catch (error) {
        console.log(error)
    }
}

export const getLayoutProjectsAction = () => async dispatch => {

    try {
        const resp = await fetch(`/api/localdata/LayoutProjects/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json()
        if(resp.status === 200){
            dispatch({
                type: types.GET_LAYOUT_PROJECTS_SUCCESS,
                payload: data.success
            })

        }else{
            console.log("no get exp error :", data.error)
            dispatch({
                type: types.GET_LAYOUT_PROJECTS_FAIL,
                payload: data.error
            })
        }

    } catch (error) {
        console.log(error)
    }
}

export const getSkillsAction = () => async dispatch => {

    try {
        const resp = await fetch(`/api/localdata/skills/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json()


        if(resp.status === 200){
            dispatch({
                type: types.GET_SKILLS_SUCCESS,
                payload: data.success
            })

        }else{
            console.log("no get exp error :", data.error)
            dispatch({
                type: types.GET_SKILLS_FAIL,
                payload: data.error
            })
        }

    } catch (error) {
        console.log(error)
    }
}