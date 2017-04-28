import {UI_OPEN_SIDEBAR, UI_CLOSE_SIDEBAR, UI_WINDOW_RESIZE} from 'actions/layout'
import {LOCATION_CHANGE, APP_INIT} from 'actions/common'

export const initialState = {
	sidebarOpened: false,
	isMobile: false
}

export function layout (state = initialState, action) {
	switch (action.type) {
	case APP_INIT:
		{
			let {innerWidth} = window
			let isMobile = innerWidth < 1025 // 1024px - is the main breakpoint in ui
			return {
				...state,
				isMobile
			}
		}
	case UI_WINDOW_RESIZE:
		{
			let {innerWidth} = window
			let isMobile = innerWidth < 1025 // 1024px - is the main breakpoint in ui
			return {
				...state,
				isMobile
			}
		}
	case UI_OPEN_SIDEBAR:
		return {
			...state,
			sidebarOpened: true
		}
	case UI_CLOSE_SIDEBAR:
		return {
			...state,
			sidebarOpened: false
		}
	case LOCATION_CHANGE:
		return {
			...state,
			sidebarOpened: false
		}
	default:
		return state
	}
}
