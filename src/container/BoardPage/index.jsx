import React, { useState } from 'react';

import Points from '../../components/Points';
import Button from '../../components/Button';
import ListOption from '../../components/ListOption';

import { Container, Result } from './styles';
import Card from '../../components/Card';

function divideCards(cards) {
	const n = 3
	const result = [[], []]

	const wordsPerLine = Math.ceil(cards.length / 2)

	for (let line = 0; line < n; line++) {
		for (let i = 0; i < wordsPerLine; i++) {
			const value = cards[i + line * wordsPerLine]
			if (!value) continue
			result[line].push(value)
		}
	}

	return result
}

function BoardPage({ side, cards }) {
	const [showResult, setShowResult] = useState('')
	const [cardsPlayer, cardsComp] = divideCards(cards)

	const checkResult = (type) => {
		const player = cardsPlayer[0][type]
			? parseFloat(cardsPlayer[0][type].replace('meters', ''))
			: 0

		const comp = cardsComp[0][type]
			? parseFloat(cardsComp[0][type].replace('meters', ''))
			: 0

		console.log({ player, comp })
		if (player > comp) {
			setShowResult('VOCÊ GANHOU!!')
		} else {
			setShowResult('VOCÊ PERDEU!!')
		}
	}

	return (
		<Container>
			<ListOption>
				<h1>Escolha uma característica:</h1>
				<ul>
					<li onClick={() => checkResult('cost')}>Preço</li>
					<li onClick={() => checkResult('length')}>Largura</li>
					<li onClick={() => checkResult('width')}>Velocidade</li>
					<li onClick={() => checkResult('height')}>Comprimento</li>
					<li onClick={() => checkResult('maxSpeed')}>Altura</li>
				</ul>
			</ListOption>

			<Button>COMBATER</Button>

			<Card side={side} isPlayer showInfo card={cardsPlayer[0]} />

			{showResult && (
				<Result>
					<h1>{showResult}</h1>
					<Button onClick={() => setShowResult(null)}>PRÓXIMA RODADA</Button>
				</Result>
			)}

			<Card
				showInfo={!showResult}
				side={side === 'jedi' ? 'sith' : 'jedi'}
				card={cardsComp[0]}
			/>

			<Points
				play={cardsPlayer.length}
				comp={cardsComp.length} />
		</Container>
	)
}

export default BoardPage;