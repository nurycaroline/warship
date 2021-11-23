import styled from 'styled-components';
import { Colors, Effects } from '../../../styles'

export const Container = styled.div`
	${Effects.blackImage}
	height: 100vh;
	background-size: contain;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0 36px;

	h1 {
		color: ${({ theme }) => theme.play.primary};
	}
`;


export const Opcoes = styled.div`
	h1 {
		color: ${Colors.yellow};
	}

	ul {
		color: ${Colors.white};
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 10px;
		
		li {
			border: 1px solid ${Colors.white};
			border-radius: 4px;
			text-align: center;
			padding: 0 10px;
			width: 100px;

			&:hover {
				color: ${({theme}) => theme.play.primary};
				border: 1px solid ${({theme}) => theme.play.primary};
			}
		}
	}

`

export const Button = styled.button`
	height: 40px;
	color: ${Colors.yellow};
	border: 1px solid ${Colors.yellow};
	border-radius: 4px;
	margin: 20px auto;
	padding: 0 20px;
	font-size: 28px;

	&:hover {
		color: ${({theme}) => theme.play.primary};
		border: 1px solid ${({theme}) => theme.play.primary};
	}
`