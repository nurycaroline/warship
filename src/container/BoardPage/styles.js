import styled from 'styled-components';
import { Colors } from '../../../styles'

export const Container = styled.div`
	

	h1 {
		color: ${({ theme }) => theme.play.primary};
	}
`;

export const Points = styled.div`
	p:nth-child(1){
		background-color: ${({ theme }) => theme.play.primary};
	}

	p:nth-child(2){
		color: ${Colors.yellow};
	}
	
	p:nth-child(3){
		background-color: ${({ theme }) => theme.comp.primary};
	}
`