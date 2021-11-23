import styled from 'styled-components';
import { Colors, Effects } from '../../../styles'

export const Container = styled.div`
	${Effects.blackImage}
	height: 100vh;
	background-size: contain;
	display: flex;
	align-items: center;
	

	h1 {
		color: ${({ theme }) => theme.play.primary};
	}
`;

