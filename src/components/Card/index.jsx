import React from 'react';

import * as S from './styles';
import Image from 'next/image'

function Card({ showInfo, isPlayer, side, card }) {
	const renderInfo = () => (
		<>
			<S.ContainerGroupImage>
				{card.image &&
					<Image src={card.image} alt={card.name}
						width={100} height={100} />
				}

				{card.image &&
					<Image src={card.image} alt={card.name}
						width={65} height={65} />
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
		<S.ContainerComp>
			{
				showInfo ? (
					<Image
						src={side === 'sith' ? "/images/sith.png" : "/images/jedi.png"}
						alt={side}
						width={100} height={100} />
				)
					: renderInfo()
			}
		</S.ContainerComp>
	) : (
		<S.ContainerPlayer>
			{renderInfo()}
		</S.ContainerPlayer>
	)
}

export default Card;