import React, { Component } from 'react'
import SeasonDisplay from './components/SeasonDisplay'
import Loader from './components/Loader'

export default class App extends Component {
	state = {
		lat: null,
		errMessage: '',
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errMessage: err.message }),
		)
	}

	renderContent = () => {
		if (this.state.errMessage && !this.state.lat) {
			return <div>Error: {this.state.errMessage}</div>
		} else if (!this.state.errMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />
		} else {
			return <Loader message='Please Accept Location Request :)' />
		}
	}

	render() {
		return <div className='border red'>{this.renderContent()}</div>
	}
}
