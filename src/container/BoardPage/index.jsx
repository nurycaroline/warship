import React from 'react';

import Points from '../../components/Points';

import { Container, Opcoes, Button } from './styles';

function BoardPage({ side }) {

	return (
		<Container>
			<Opcoes>
				<h1>Escolha uma característica:</h1>

				<ul>
					<li>Preço</li>
					<li>Largura</li>
					<li>Velocidade</li>
					<li>Comprimento</li>
					<li>Altura</li>
				</ul>

			</Opcoes>
			<Button>COMBATER</Button>

			<Points />
		</Container>
	)
}

export default BoardPage;