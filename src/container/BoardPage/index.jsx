import React from 'react';

import Points from '../../components/Points';

import { Container } from './styles';

function BoardPage({ side }) {

	return (
		<Container>
			<Points />
		</Container>
	)
}

export default BoardPage;