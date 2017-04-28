import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
// Accessing PropTypes via the main React package is deprecated.
// Use the prop-types package from npm instead.
import PropTypes from 'prop-types'
import {Dimmer, Sidebar as SidebarSemantic, Container} from 'semantic-ui-react'
import {Header, Sidebar, Footer} from 'components'
import {CLOSE_SIDEBAR, OPEN_SIDEBAR, WINDOW_RESIZE} from 'actions/layout'
import {appRouting} from 'routing'
import './App.scss'

class App extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		// react-router `withRouter` props
		location: PropTypes.object,
		history: PropTypes.object,
		// match can force component to re-render
		match: PropTypes.object,

		// sidebarOpened can force component to re-render
		sidebarOpened: PropTypes.bool,
		closeSidebar: PropTypes.func,
		// isLoggedIn can force component to re-render
		handleWindowResize: PropTypes.func,
		toggleSidebar: PropTypes.func,
		// isMobile can force component to re-render
		isMobile: PropTypes.bool
	}

	componentWillMount () {
		let {handleWindowResize} = this.props
		window.addEventListener('resize', handleWindowResize)
	}

	// shouldComponentUpdate(nextProps, nextState) {
	//     return !_.isEqual(this.props, nextProps) && !_.isEqual(nextState, this.state)
	// }

	componentWillReceiveProps (nextProps) {

	}

	render () {
		let {
			children,
			sidebarOpened,
			closeSidebar,
			toggleSidebar,
			location,
			isMobile
		} = this.props

		// must be refactored, if one of your route looks like `/api/users/:id`
		// get currentRoute
		let currentRoute = appRouting.filter(a => a.path === location.pathname)[0] || {}
		// title for Header
		let title = currentRoute.name || '404'
		// routing for sidebar menu
		let sidebarRouting = appRouting.filter(a => a.sidebarVisible).map(a => {
			let {path, name, icon, external, strict, exact} = a
			let b = {path, name, icon, external, strict, exact}
			return b
		})

		let sidebarProps = {
			isMobile,
			open: sidebarOpened,
			routing: sidebarRouting
		}

		let headerProps = {
			toggleSidebar,
			title
		}

		let dimmerProps = {
			active: true,
			onClick: closeSidebar
		}

		return (
			<div className="page-layout">
				<SidebarSemantic.Pushable>
					<Sidebar {...sidebarProps} />
					<SidebarSemantic.Pusher>
						{/* Semantic ui currently(16.04.16) doesn't have closeDimmerOnClick or smth else
                        So, instead of it, we can use simple <Dimmer> component */}
						{/* <SidebarSemantic.Pusher dimmed={sidebarOpened}> */}
						<Header {...headerProps} />
						<main>
							<div className="main-content">
								<Container>
									{children}
								</Container>
							</div>
							<Footer />
						</main>
						{/* show dimmer only if:
                        1. if sidebar is opened  */}
						{sidebarOpened && <Dimmer {...dimmerProps} />}
					</SidebarSemantic.Pusher>
				</SidebarSemantic.Pushable>
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		sidebarOpened: state.layout.sidebarOpened,
		isMobile: state.layout.isMobile
	}
}

function mapDispatchToProps (dispatch) {
	let resizer
	return {
		closeSidebar: () => {
			dispatch(CLOSE_SIDEBAR())
		},

		toggleSidebar: () => {
			dispatch(OPEN_SIDEBAR())
		},

		handleWindowResize: () => {
			clearTimeout(resizer)
			resizer = setTimeout(() => dispatch(WINDOW_RESIZE()), 100)
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
