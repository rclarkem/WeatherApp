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
		console.log(obj)
		for (let i = 1; i < 8; i++) {
			fetch(`http://api.worldbank.org/v2/country/?page=${i}&format=json`)
				.then(response => response.json())
				.then(response => {
					return response[1].map(ele => {
						if (ele.name === obj) {
							this.setState({
								lat: ele.latitude,
								errMessage: false,
							})
						}
					})
				})
			// console.log(latitC)
		}
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
		console.log(this.state.lat)
		console.log(this.state.errMessage)
		return <div className='border red'>{this.renderContent()}</div>
	}
}
