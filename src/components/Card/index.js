import React from 'react';

import * as S from './styles';
import Image from 'next/image'

function Card({ type }) {
	return type === 'comp' ? (
		<S.ContainerComp>
			<Image
				src="/images/jedi.png"
				alt="jedi"
				width={100} height={100} />
		</S.ContainerComp>
	) : (
		<S.Container>
			<S.ContainerGroupImage>
				<Image src="/images/ship.png" alt="Sith"
					width={100} height={100} />

				<Image src="/images/ship.png" alt="Sith"
					width={65} height={65} />
			</S.ContainerGroupImage>

			<S.ContainerInfos>
				<h2>The Advanced v1</h2>
				<p>Preço <strong>150,000</strong></p>
				<p>Comprimento <strong>150,000</strong></p>
				<p>Largura <strong>150,000</strong></p>
				<p>Altura <strong>150,000</strong></p>
				<p>Velocidade <strong>150,000</strong></p>
			</S.ContainerInfos>
		</S.Container>
	)
}

export default Card;