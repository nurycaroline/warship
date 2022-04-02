import React, { useState } from 'react';
import Image from 'next/image'
import Points from '../../components/Points';
import Button from '../../components/Button';
import ListOption from '../../components/ListOption';

import * as S from './styles';
import { Ordem } from '../HomePage/styles';
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
	const [showFinalWineer, setShowFinalWinner] = useState('')
	const [deck1, deck2] = divideCards(cards)

	const [cardsPlayer, setCardsPlayer] = useState(deck1)
	const [cardsComp, setCardsComp] = useState(deck2)

	const checkResult = (type) => {
		const playerResult = cardsPlayer[0][type]
			? parseFloat(cardsPlayer[0][type].replace('meters', ''))
			: 0

		const compResult = cardsComp[0][type]
			? parseFloat(cardsComp[0][type].replace('meters', ''))
			: 0

		console.log(cardsPlayer[0])

		console.log({ playerResult, compResult })

		let cardsPlayerCopy = [...cardsPlayer]
		let cardsCompCopy = [...cardsComp]
		cardsPlayerCopy.shift()
		cardsCompCopy.shift()

		if (!cardsCompCopy.length) {
			setShowFinalWinner(side)
			return
		}

		if (!cardsPlayerCopy.length) {
			setShowFinalWinner(side === 'jedi' ? 'sith' : 'jedi')
			return
		}

		if (playerResult > compResult) {
			setCardsPlayer([...cardsPlayerCopy, cardsComp[0], cardsPlayer[0]])
			setCardsComp(cardsCompCopy)

			setShowResult('VOCÊ GANHOU!!')
		} else {
			setCardsPlayer(cardsPlayerCopy)
			setCardsComp([...cardsCompCopy, cardsPlayer[0], cardsComp[0]])

			setShowResult('VOCÊ PERDEU!!')
		}
	}

	return (
		<S.Container>
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

			<Card side={side} isPlayer showInfo card={cardsPlayer[0]} />

			{showResult && (
				<>
					<S.BackgroundResult />
					<S.Result>
						<h1>{showResult}</h1>
						{
							(!!cardsComp.length || !!cardsPlayer.length) && (
								<Button
									onClick={() => setShowResult(null)}
								>
									PRÓXIMA RODADA
								</Button>
							)
						}
					</S.Result>
				</>
			)
			}

			{showFinalWineer && (
				<>
					<S.BackgroundResult />
					<S.ResultFinal>
						<Ordem color={showFinalWineer === 'sith' ? 'red' : 'blue'}>
							<Image src={showFinalWineer === 'sith' ? "/images/sith.png" : "/images/jedi.png"}
								alt={showFinalWineer}
								width={80} height={80} />
							<h2>{showFinalWineer}</h2>
						</Ordem>

						<h1>VENCEU A PARTIDA!</h1>

						<Button
							onClick={() => window.location.reload()}
						>
							PRÓXIMA PARTIDA
						</Button>
					</S.ResultFinal>
				</>
			)
			}

			<Card
				showInfo={!showResult}
				side={side === 'jedi' ? 'sith' : 'jedi'}
				card={cardsComp[0]}
			/>

			<Points
				play={cardsPlayer.length}
				comp={cardsComp.length} />
		</S.Container >
	)
}

export default BoardPage;