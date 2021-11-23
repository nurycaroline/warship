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
				color: ${({ theme }) => theme.play.primary};
				border: 1px solid ${({ theme }) => theme.play.primary};
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
		color: ${({ theme }) => theme.play.primary};
		border: 1px solid ${({ theme }) => theme.play.primary};
	}
`

export const Card = styled.div`
	width: 100%;
	margin-bottom: 60px;
	border: 1px solid ${({ theme }) => theme.play.primary};
	${({ theme }) => theme.play.primaryEffectsSmall};
	display: flex;
	justify-content: space-between;
`

export const CardGroupImage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	span:nth-child(1){
		opacity: 0.2 !important;
	}

	span:nth-child(2){
		position: absolute !important;
	}
`

export const CardInfos = styled.div`
	width: 70%;
	padding-right: 10px;

	h2 {
		color: ${Colors.white};
		${Fonts.StarJedi.reg16}
	}

	p {
		color: ${Colors.white};
		display: flex;
		width: 100%;
    justify-content: space-between;

		strong {
			text-align: right;
			width: 100%;
		}
	}
`