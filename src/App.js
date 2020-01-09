import React, { Component } from 'react'
import SeasonDisplay from './components/SeasonDisplay'

export default class App extends Component {
	state = {
		lat: null,
		errMessage: '',
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			// position => console.log(position),
			// err => console.log(err),
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errMessage: err.message }),
		)
	}

	render() {
		console.log(this.state.lat)

		if (this.state.errMessage && !this.state.lat) {
			return <div>Error: {this.state.errMessage}</div>
		} else if (!this.state.errMessage && this.state.lat) {
			return <div>Latitude: {this.state.lat}</div>
		} else {
			return <div>Loading!</div>
		}
	}
}
