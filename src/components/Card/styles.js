import styled from 'styled-components';
import { Colors, Fonts} from '../../../styles';

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	border: 1px solid ${({ theme }) => theme.play.primary};
	${({ theme }) => theme.play.primaryEffectsSmall};
	height: 210px;
`

export const ContainerComp = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 160px;
	height: 210px;
	border: 1px solid ${({ theme }) => theme.comp.primary};
	${({ theme }) => theme.comp.primaryEffectsSmall};
`

export const ContainerGroupImage = styled.div`
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

export const ContainerInfos = styled.div`
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