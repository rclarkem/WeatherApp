import React, { Component } from 'react'
import SeasonDisplay from './components/SeasonDisplay'
import Loader from './components/Loader'
import Error from './components/Error'

let latitC

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

	// if (ele.name === obj) {
	// 							console.log(ele.latitude)
	// 						}

	tester = obj => {
		fetch(`  https://nominatim.openstreetmap.org/search/${obj}?format=json`)
			.then(response => response.json())
			.then(response => {
				this.setState({
					lat: response[0].lat,
					errMessage: false,
				})
			})
		// console.log(latitC)
	}

	renderContent = () => {
		if (this.state.errMessage && !this.state.lat) {
			return <Error tester={this.tester} />
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
