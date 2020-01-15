import React from 'react'

import { Jumbotron, Container } from 'react-bootstrap'

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter'
	} else {
		return lat > 0 ? 'winter' : 'summer'
	}
}

export default function SeasonDisplay(props) {
	const season = getSeason(props.lat, new Date().getMonth())
	const seasonHeader = season === 'winter' ? 'Burr, it is chilly!' : "Let's hit the beach!"

	return (
		<Jumbotron fluid>
			<Container>
				<h1>{seasonHeader}</h1>
			</Container>
		</Jumbotron>
	)
}
