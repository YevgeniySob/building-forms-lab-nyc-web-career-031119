import React, { Component } from 'react'

export default class Bands extends Component {
	render() {
		return (
			<ul>
					{this.props.bands.map(band => {
						return (
							<li>
								{band.name}
							</li>
						)
					})}
			</ul>
		);
	}
}
