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

	width: 300px;
	height: 200px;

	h1 {
		color: ${Colors.yellow};
		${Fonts.Oswald.reg24}
	}
`