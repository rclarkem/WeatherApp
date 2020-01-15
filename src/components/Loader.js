import React from 'react'

export default function Loader(props) {
	return (
		<div className='ui active dimmer'>
			<div className='ui big text loader'>{props.message}</div>
		</div>
	)
}
Loader.defaultProps = { message: 'Loading...' }
