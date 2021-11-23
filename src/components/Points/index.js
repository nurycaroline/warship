import React from 'react';

import { Container } from './styles';

function Points({ play = 20, comp = 20 }) {
	return (
		<Container>
			<h2>CARTAS</h2>
			<div>
				<p>{play}</p>
				<p>vs</p>
				<p>{comp}</p>
			</div>
		</Container>
	);
}

export default Points;