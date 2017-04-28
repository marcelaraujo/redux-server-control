import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {ConnectedRouter as Router} from 'react-router-redux'

export default class Root extends Component {
	static propTypes = {
		store: PropTypes.object,
		history: PropTypes.object,
		routes: PropTypes.func
	}

	render () {
		const {store, history, routes} = this.props
		return (
			<Provider store={store} key={Math.random()}>
				<Router history={history} key={Math.random()}>
					{routes()}
				</Router>
			</Provider>
		)
	}
}
