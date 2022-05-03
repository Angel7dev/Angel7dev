import * as types from './types'

export const getExpAction = () => async dispatch => {

    try {
        const resp = await fetch(`/api/get/exp/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json()

        console.log("status",resp.status)

        if(resp.status === 200){
            console.log(data.success)
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