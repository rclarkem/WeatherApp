import './SeasonDisplay.css'
import React from 'react'

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter'
	} else {
		return lat > 0 ? 'winter' : 'summer'
	}
}

const seasonStyle = {
	summer: { text: "Let's hit the beach!", icon: 'sun', iconColor: 'orange' },
	winter: { text: 'Burr, it is chilly!', icon: 'snowflake', iconColor: 'white' },
}

export default function SeasonDisplay(props) {
	const season = getSeason(props.lat, new Date().getMonth())
	const { text, icon, color, iconColor } = seasonStyle[season]

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-top massive ${icon} icon`} style={{ color: iconColor }}></i>
			<h1>{text}</h1>
			<i className={`icon-bottom massive ${icon} icon`} style={{ color: iconColor }}></i>
		</div>
	)
}
