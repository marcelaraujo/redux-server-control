import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import DashboardComponent from './components'
import {SEND_EVENT_TO_SERVER} from 'actions/dashboard'

class Dashboard extends Component {
	static propTypes = {
		sendEventToServer: PropTypes.func.isRequired
	}

	componentDidMount () {}

	render () {
		let {sendEventToServer} = this.props
		let props = {sendEventToServer}

		return <DashboardComponent {...props} />
	}
}

function mapStateToProps (state) {
	return {}
}

function mapDispatchToProps (dispatch) {
	return {
		sendEventToServer: (data) => {
			// dispatch(SEND_EVENT_TO_SERVER())
			SEND_EVENT_TO_SERVER(data)
		}
		// execEventToServer: async (action) => {
		// 	let result = await dispatch(action)
		// 	dispatch(result)
		// }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
