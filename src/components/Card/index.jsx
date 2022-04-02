import React from 'react';

import * as S from './styles';
import Image from 'next/image'

function Card({ showInfo, isPlayer, side, card }) {
	const renderInfo = () => (
		<>
			<S.ContainerGroupImage>
				{card.image &&
					<Image src={card.image} alt={card.name}
						width={200} height={200}
						style={{
							maxHeight: 200
						}}
					/>
				}
			</S.ContainerGroupImage>

			<S.ContainerInfos>
				<h2>{card.name}</h2>
				<p>Preço <strong>{card.cost}</strong></p>
				<p>Comprimento <strong>{card.length}</strong></p>
				<p>Largura <strong>{card.width}</strong></p>
				<p>Altura <strong>{card.height}</strong></p>
				<p>Velocidade <strong>{card.maxSpeed}</strong></p>
			</S.ContainerInfos>
		</>
	)

	return !isPlayer ? (
		<>
			<S.Player>Computador</S.Player>
			{showInfo ? (
				<S.ContainerComp>{renderInfo()}</S.ContainerComp>) : (
				<S.ContainerCompWithouInfo>
					<Image
						src={side === 'sith' ? "/images/sith.png" : "/images/jedi.png"}
						alt={side}
						width={100} height={100} />
				</S.ContainerCompWithouInfo >
			)}
		</>
	) : (
		<>
			<S.Player>Você</S.Player>
			<S.ContainerPlayer>
				{renderInfo()}
			</S.ContainerPlayer>
		</>
	)
}

export default Card;