import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class Error extends Component {
	state = {
		country: '',
	}

	onChange = e => {
		console.log(e.target.value)
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	onSubmit = () => {
		let stringified = this.state.country.slice(0)
		let submitWord = stringified[0].toUpperCase() + stringified.slice(1)
		this.props.tester(submitWord)
	}

	render() {
		return (
			<div>
				<div className='ui message'>
					<div className='header'>
						Please type in your country in order to find use your latitude.{' '}
					</div>
				</div>

				<Form className='form-color' onSubmit={this.onSubmit}>
					<Form.Field>
						<label>Country</label>
						<input
							placeholder='Please type in your country'
							name='country'
							value={this.state.country}
							onChange={this.onChange}
						/>
					</Form.Field>
					<Button type='submit'>Submit</Button>
				</Form>
			</div>
		)
	}
}
