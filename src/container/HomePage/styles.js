import styled, { css } from 'styled-components';
import media from 'styled-media-query'

import { Colors, Efects, Fonts, Gradients } from '../../../styles'

export const Container = styled.div`
	${Efects.blackImage}
	height: 100vh;
	background-size: contain;

	main {
		width: 100%;
		height: calc(100% - 26px);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		h1 {
			${Fonts.Oswald.bold24};
			color: ${Colors.yellow};
			margin-top: 50px;
		}
	}
`;

export const Header = styled.header`
	${Fonts.StarJedi.reg16};
	color: ${Colors.yellow};
	text-align: center;

	${media.greaterThan('medium')`
		${Fonts.StarJedi.reg54}
		text-align: left;
		margin: 0 auto;
		max-width: 1024px;
	`}
`

export const Orderns = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
`

export const Ordem = styled.div`
	width: 140px;
	height: 160px;
	border-radius: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	${({ color }) => color === 'red' ?
		css`
			${Gradients.redDark}
			${Efects.red}
		`
		: css`
			${Gradients.blueDark}}
			${Efects.blue}
		`}


	h2 {
		${Fonts.Oswald.bold24}
		color: ${Colors.white};
		margin-top: 10px;
	}

	${media.greaterThan('medium')`
		width: 240px;
		height: 280px;

		h2 {
			${Fonts.Oswald.bold54}
		}

		span {
			width: 140px !important;
			height: 140px !important;
		}
	`}
`

export const Regras = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	padding-right: 24px;
	margin-top: 100px;

	span {
		${Fonts.Oswald.reg24}
		color: ${Colors.yellow};
	}
	
	${media.greaterThan("medium")`
		position: absolute;
		top: -80px
	`}
`