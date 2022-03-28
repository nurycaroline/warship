import styled from 'styled-components';
import { Colors, Fonts, Effects } from '../../../styles';

export const Container = styled.div`
	border: 1px solid ${Colors.yellow};
	width: 180px;
	padding: 5px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto;

	h2 {
		color: ${Colors.yellow};
    margin-top: -25px;
		background-color: #000;
		text-align: center;
		width: 80px;
	}

	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	p:nth-child(1),
	p:nth-child(3) {
		height: 50px;
		width: 50px;
		border-radius: 8px;
		color: ${Colors.white};
		text-align: center;
		line-height: 50px;
	}

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