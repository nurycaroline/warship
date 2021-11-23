import React from 'react';
import Image from 'next/image'

import Points from '../../components/Points';

import { Container, Opcoes, Button, Card, CardInfos, CardGroupImage } from './styles';


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

			<Card>
				<CardGroupImage>
					<Image src="/images/ship.png" alt="Sith"
						width={100} height={100} />

					<Image src="/images/ship.png" alt="Sith"
						width={65} height={65} />
				</CardGroupImage>

				<CardInfos>
					<h2>The Advanced v1</h2>
					<p>Preço <strong>150,000</strong></p>
					<p>Comprimento <strong>150,000</strong></p>
					<p>Largura <strong>150,000</strong></p>
					<p>Altura <strong>150,000</strong></p>
					<p>Velocidade <strong>150,000</strong></p>
				</CardInfos>
			</Card>


			<Points />
		</Container>
	)
}

export default BoardPage;