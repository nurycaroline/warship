import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import { Container, Header, Ordem, Orderns, Regras } from './styles';

function HomePage() {
	return (
		<Container>
			<Header>
				warship
			</Header>

			<main>
				<Orderns>
					<Link href={{ pathname: 'board', query: { side: 'sith' } }} passHref>
						<Ordem color="red">
							<Image src="/images/sith.png"
								alt="Sith"
								width={80} height={80} />
							<h2>Sith</h2>
						</Ordem>
					</Link>
					<Link  href={{ pathname: 'board', query: { side: 'jedi' } }} passHref>
						<Ordem color="blue">
							<Image src="/images/jedi.png"
								alt="Jedi"
								width={80} height={80} />
							<h2>Jedi</h2>
						</Ordem>
					</Link>
				</Orderns>

				<h1>ESCOLHA UM LADO</h1>

				<Regras>
					<Image src="/images/regras.png" alt="Regra" width={25} height={25} />
					<span>regras</span>
				</Regras>
			</main>
		</Container>
	)
}

export default HomePage;