import Image from 'next/image';
import styled from 'styled-components';
import { Colors, Fonts} from '../../../styles';

export const ContainerPlayer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid ${({ theme }) => theme.play.primary};
	${({ theme }) => theme.play.primaryEffectsSmall};
	height: 230px;
`

export const ContainerComp = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 230px;
	border: 1px solid ${({ theme }) => theme.comp.primary};
	${({ theme }) => theme.comp.primaryEffectsSmall};
`

export const ContainerCompWithouInfo = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 230px;
	border: 1px solid ${({ theme }) => theme.comp.primary};
	${({ theme }) => theme.comp.primaryEffectsSmall};
`

export const ContainerGroupImage = styled.div``


export const ContainerInfos = styled.div`
	width: 70%;
	padding-right: 10px;
	margin-left: 10px;

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