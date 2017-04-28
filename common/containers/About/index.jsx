import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
// import {GET_INBOX} from 'actions/inbox'

class About extends Component {
	static propTypes = {}

	componentDidMount () {}

	render () {
		return <div></div>
	}
}

function mapStateToProps (state) {
	return {}
}

function mapDispatchToProps (dispatch) {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
