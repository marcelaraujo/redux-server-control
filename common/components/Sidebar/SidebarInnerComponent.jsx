import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {Menu, Icon} from 'semantic-ui-react'
import {Logo} from 'components'
// import _ from 'lodash'
import './Sidebar.scss'

export default class SidebarInnerComponent extends Component {
	static propTypes = {
		routing: PropTypes.array
	}

	render () {
		const {routing} = this.props

		let routes = routing.map((route, i) => {
			let {external, path, icon, name, strict, exact} = route
			let propsMenuItem = {
				as: external ? 'a' : NavLink,
				link: true,
				key: i,
				[external ? 'href' : 'to']: path
			}

			if (!external) {
				propsMenuItem = {
					...propsMenuItem,
					strict,
					exact,
					activeClassName: 'active'
				}
			}

			return (
				<Menu.Item {...propsMenuItem} icon>
					<Icon name={icon} /> {name}
				</Menu.Item>
			)
		})

		return (
			<div>
				<Logo centered />
				{routes}
			</div>
		)
	}
}
