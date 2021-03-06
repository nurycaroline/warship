import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Points from '../../components/Points';
import Button from '../../components/Button';
import ListOption from '../../components/ListOption';

import * as S from './styles';
import { Ordem } from '../HomePage/styles';
import Card from '../../components/Card';

function BoardPage({ side, cards }) {
	const [showResult, setShowResult] = useState('')
	const [showFinalWineer, setShowFinalWinner] = useState('')

	const [resultPlay, setResultPlay] = useState({ player: 0, comp: 0 })

	const [cardsPlayer, setCardsPlayer] = useState(cards.jedi)
	const [cardsComp, setCardsComp] = useState(cards.sith)

	const [optionSelected, setOptionSelected] = useState('')


	const formatValue = (value) => { 
		return value
			.replace('meters', '')
			.replace('kph', '')
			.replace('MGLT', '')
			.replace('credits', '')
			.replace('km/h', '')
	}

	const checkResult = (type, optionName) => {
		setOptionSelected(optionName)

		const playerResult = cardsPlayer[0][type]
			? parseFloat(formatValue(cardsPlayer[0][type]))
			: 0

		const compResult = cardsComp[0][type]
			? parseFloat(formatValue(cardsComp[0][type]))
			: 0

		setResultPlay({
			player: playerResult,
			comp: compResult
		})

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
			setShowResult('VOCÊ GANHOU!!')
		} else {
			setShowResult('VOCÊ PERDEU!!')
		}
	}

	const nextPlay = () => {
		let cardsPlayerCopy = [...cardsPlayer]
		let cardsCompCopy = [...cardsComp]
		cardsPlayerCopy.shift()
		cardsCompCopy.shift()

		if (showResult === 'VOCÊ GANHOU!!') {
			setCardsPlayer([...cardsPlayerCopy, cardsComp[0], cardsPlayer[0]])
			setCardsComp(cardsCompCopy)
		} else if (showResult === 'VOCÊ PERDEU!!') {
			setCardsPlayer(cardsPlayerCopy)
			setCardsComp([...cardsCompCopy, cardsPlayer[0], cardsComp[0]])
		}

		setShowResult(null)
	}

	return (
		<S.Container>
			{!showResult ? (
				<ListOption>
					<h1>Escolha uma característica:</h1>
					<ul>
						<li onClick={() => checkResult('cost', 'Preço')}>Preço</li>
						<li onClick={() => checkResult('length', 'Largura')}>Largura</li>
						<li onClick={() => checkResult('width', 'Velocidade')}>Velocidade</li>
						<li onClick={() => checkResult('height', 'Comprimento')}>Comprimento</li>
						<li onClick={() => checkResult('maxSpeed', 'Altura')}>Altura</li>
					</ul>
				</ListOption>
			) : (
				<br />
			)
			}


			<Card side={side} isPlayer showInfo card={cardsPlayer[0]} />

			{
				showResult && (
					<S.Result>
						<h1>{showResult}</h1>
						<h1>
							{optionSelected}:
							<S.ResultPlayPlayer> {resultPlay.player}</S.ResultPlayPlayer> x <S.ResultPlayComp>{resultPlay.comp}</S.ResultPlayComp>
						</h1>
						{
							(!!cardsComp.length || !!cardsPlayer.length) && (
								<Button
									onClick={() => nextPlay()}
								>
									PRÓXIMA RODADA
								</Button>
							)
						}
					</S.Result>
				)
			}

			<Card
				showInfo={showResult || showFinalWineer}
				side={side === 'jedi' ? 'sith' : 'jedi'}
				card={cardsComp[0]}
			/>


			<Points
				play={cardsPlayer.length}
				comp={cardsComp.length} />

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


						<Link href="/" passHref>
							<Button>
								PRÓXIMA PARTIDA
							</Button>
						</Link>
					</S.ResultFinal>
				</>
			)
			}
		</S.Container >
	)
}

export default BoardPage;