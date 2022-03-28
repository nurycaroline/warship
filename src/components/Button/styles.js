import styled from 'styled-components';
import { Colors } from '../../../styles';

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