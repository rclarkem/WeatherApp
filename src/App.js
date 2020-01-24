import React, { Component } from 'react'
import SeasonDisplay from './components/SeasonDisplay'
import Loader from './components/Loader'
import Error from './components/Error'
import { Route, Switch } from 'react-router-dom'
import Weather from './components/Weather'
import Navbar from './components/Navbar'
import '../src/App.css'
import { About } from './components/About'

export default class App extends Component {
	state = {
		lat: null,
		long: null,
		errMessage: '',
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errMessage: err.message }),
		)
	}

	tester = obj => {
		fetch(`https://nominatim.openstreetmap.org/search/${obj}?format=json`)
			.then(response => response.json())
			.then(response => {
				console.log(response)
				this.setState({
					lat: response[0].lat,
					long: response[0].lon,
					errMessage: false,
				})
			})
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
		const { long, lat } = this.state
		return (
			<div className='border red'>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						{this.renderContent()}
					</Route>
					<Route exact path='/weather'>
						<Weather long={long} lat={lat} />
					</Route>
					<Route exact path='/about'>
						<About />
					</Route>
				</Switch>
			</div>
		)
	}
}
