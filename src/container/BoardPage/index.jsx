import React, { useState } from 'react';

import Points from '../../components/Points';
import Button from '../../components/Button';
import ListOption from '../../components/ListOption';

import { Container, Result } from './styles';
import Card from '../../components/Card';


function BoardPage({ side }) {

	const [showResult, setShowResult] = useState(true)

	return (
		<Container>
			<ListOption>
				<h1>Escolha uma característica:</h1>
				<ul>
					<li>Preço</li>
					<li>Largura</li>
					<li>Velocidade</li>
					<li>Comprimento</li>
					<li>Altura</li>
				</ul>
			</ListOption>

			<Button>COMBATER</Button>

			<Card />

			{showResult && (
				<Result>
					<h1>VOCÊ PERDEU!!</h1>
					<Button>PRÓXIMA RODADA</Button>
				</Result>
			)}

			<Card type="comp" />

			<Points />
		</Container>
	)
}

export default BoardPage;