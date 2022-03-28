import styled from 'styled-components';
import { Colors } from '../../../styles';


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