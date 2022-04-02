import styled from 'styled-components';
import { Colors, Effects, Fonts } from '../../../styles'

export const Container = styled.div`
	${Effects.blackImage}
	height: 100vh;
	background-size: contain;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0 36px;
	justify-content: space-between;
`;

export const BackgroundResult = styled.div`
	width: 100%;
	height: 100%;
	background: red;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 998;
	background: ${Colors.blackLight};
`

export const Result = styled.div`
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${Colors.black};
	padding: 30px;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 999;
	border: 1px solid ${Colors.yellow};
	border-radius: 8px;

	width: 300px;
	height: 200px;

	h1 {
		color: ${Colors.yellow};
		${Fonts.Oswald.reg24}
	}
`

export const ResultFinal = styled.div`
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${Colors.black};
	justify-content: space-between;
	padding: 30px;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 999;
	border: 1px solid ${Colors.yellow};
	border-radius: 8px;

	width: 300px;
	height: 350px;

	h1 {
		color: ${Colors.yellow};
		${Fonts.Oswald.reg24}
	}

	h2 {
		text-transform: uppercase;
	}
`
