import { combineReducers } from 'redux'
import portfolio from './portfolio'

const reducers = {
    portfolio: portfolio,
}

export default combineReducers(reducers)