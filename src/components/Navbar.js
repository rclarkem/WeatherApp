import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class Navbar extends Component {
	render() {
		return (
			<nav className='navbar bg-primary'>
				<h1>
					<Link to='/'>
						<i className='fas fa-snowflake'></i>
						<i className='fas fa-sun'></i>
						Season Display Teller
					</Link>
				</h1>
				<h2>
					<Link to='/weather'>
						<i className='fas fa-cloud'>Weather</i>
					</Link>
				</h2>
				<h2>
					<Link to='/about'>About</Link>
				</h2>
				<h2></h2>
			</nav>
		)
	}
}
