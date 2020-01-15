import React, { Fragment } from 'react'
import { Icon } from 'semantic-ui-react'
import { Jumbotron, Container } from 'react-bootstrap'

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter'
	} else {
		return lat > 0 ? 'winter' : 'summer'
	}
}

const seasonStyle = {
	summer: { text: "Let's hit the beach!", icon: 'sun' },
	winter: { text: 'Burr, it is chilly!', icon: 'snowflake' },
}

export default function SeasonDisplay(props) {
	const season = getSeason(props.lat, new Date().getMonth())
	const { text, icon } = seasonStyle[season]

	return (
		<div>
			<Jumbotron fluid>
				<Container>
					<Icon name={icon} size='big' />
					<h1>{text}</h1>
				</Container>
				<Icon name={icon} size='big' />
			</Jumbotron>
		</div>
	)
}
