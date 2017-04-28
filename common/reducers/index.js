import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import {layout} from './layout'
import {dashboard} from './dashboard'

export const rootReducer = combineReducers({
	layout,
	dashboard,
	routing: routerReducer
})
