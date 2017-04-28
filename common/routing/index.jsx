import React from 'react'
import {Route, Redirect, Switch} from 'react-router'
import {createBrowserHistory} from 'history'
import {Dashboard, About, App} from 'containers'

export const history = getHistory()

export const appRouting = [
	{
		path: '/',
		icon: 'newspaper',
		name: 'Dashboard',
		exact: true,
		sidebarVisible: true,
		component: Dashboard
	},
	{
		path: '/about',
		icon: 'settings',
		name: 'About',
		exact: true,
		sidebarVisible: true,
		component: About
	},
	{
		external: true,
		path: 'https://github.com/Metnew/react-semantic.ui-starter',
		icon: 'github',
		name: 'Github',
		sidebarVisible: true
	}
]

/**
 * Returns application routing with protected by AuthCheck func routes
 * @param {Function} authCheck checks is user logged in
 */
export const Routing = () => {
	// remove components that aren't application routes, (e.g. github link in sidebar)
	let routes = appRouting.filter(a => a.tag || a.component)
	// render components that are inside Switch (main view)
	let routesRendered = routes.map((a, i) => {
		// get tag for Route. is it RouteAuth `protected route` or Route?
		let {path, exact, strict, component} = a
		// can visitor access this route?
		// select only props that we need
		let b = {path, exact, strict, component}
		return <Route key={i} {...b} />
	})

	return (
		<App>
			<Switch>
				{routesRendered}
				<Redirect to="/" />
			</Switch>
		</App>
	)
}

function getHistory () {
	const basename = process.env.BUILD_DEMO ? '/react-semantic.ui-starter' : ''

	return createBrowserHistory({basename})
}
