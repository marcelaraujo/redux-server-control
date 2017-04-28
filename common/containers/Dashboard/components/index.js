import React, {Component} from 'react'
import {Loader, Grid, Button} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import _ from 'lodash'

export default class DashboardComponent extends Component {
	static propTypes = {
		sendEventToServer: PropTypes.func
	}

	handleButtonSubmit() {
		this.props.sendEventToServer({text: 'lol'})
	}

	render () {
		return (
			<div>
				<Grid columns={1}>
					<Grid.Row centered>
						<Grid.Column width={16}>
							<Button
								basic
								color='blue'
								content='Fork'
								icon='fork'
								label={{ as: 'a', basic: true, color: 'blue', pointing: 'left', content: '1,048' }}
								onClick={::this.handleButtonSubmit}
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		)
	}
}
