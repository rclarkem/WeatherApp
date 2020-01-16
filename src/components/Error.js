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
			<Form onSubmit={this.onSubmit}>
				<Form.Field>
					<label>First Name</label>
					<input
						placeholder='First Name'
						name='country'
						value={this.state.country}
						onChange={this.onChange}
					/>
				</Form.Field>
				<Button type='submit'>Submit</Button>
			</Form>
		)
	}
}
