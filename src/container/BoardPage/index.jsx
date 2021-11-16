import React from 'react';

import { Container, Points } from './styles';

function BoardPage({ side }) {

	return (
		<Container>
			
			<Points>
				<p>20</p>
				<p>vs</p>
				<p>20</p>
			</Points>
		</Container>
	)
}

export default BoardPage;