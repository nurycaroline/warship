import React from 'react';
import Image from 'next/image'

import { Container, Header, Ordem, Orderns, Regras } from './styles';

function HomePage() {
	return (
		<Container>
			<Header>
				WARSHIP
			</Header>

			<main>
				<Orderns>
					<Ordem color="red">
						<Image src="/images/sith.png"
							alt="Sith"
							width={80} height={80} />
						<h2>Sith</h2>
					</Ordem>
					<Ordem color="blue">
						<Image src="/images/jedi.png"
							alt="Jedi"
							width={80} height={80} />
						<h2>Jedi</h2>
					</Ordem>
				</Orderns>

				<h1>Escolha um lado</h1>

				<Regras>
					<Image src="/images/regras.png" alt="Regra" width={25} height={25} />
					<span>Regras</span>
				</Regras>
			</main>
		</Container>
	)
}

export default HomePage;