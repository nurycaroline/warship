import { css } from 'styled-components'

const Colors = {
	blueDark: '#3B559F',
	blue: '#126FE0',

	redDark: '#65121A',
	red: '#C90E10',

	black: '#1C1C1C',
	blackLight: 'rgba(51, 51, 51, 0.7)',

	white: '#F1F1F1',

	yellow: '#FFDF00',
}

const Effects = {
	blue: css`box-shadow: 0px 0px 22px 9px rgba(59, 85, 159, 0.74);`,
	blueSmall: css`box-shadow: 0px 0px 11px 4.5px rgba(59, 85, 159, 0.74);`,

	red: css`box-shadow: 0px 0px 22px 9px #65121A;`,
	redSmall: css`box-shadow: 0px 0px 11px 4.5px #65121A;`,

	blackImage: css`background: url(background.png), #000000;`
}

const Gradients = {
	blueDark: css`background: radial-gradient(50% 50% at 50% 50%, #126FE0 0%, #3B559F 100%);`,
	blueLigh: css`background: radial-gradient(50% 50% at 50% 50%, #126FE0 0%, #AEC9EA 100%);`,

	redDark: css`background: radial-gradient(50% 50% at 50% 50%, #C90E10 0%, #65121A 100%);`,
	redLight: css`background: radial-gradient(50% 50% at 50% 50%, #C90E10 0%, #E69E9F 100%);`,
}

const Fonts = {
	StarJedi: {
		reg54: css`
			font-family: 'StarJedi';
			font-style: normal;
			font-weight: normal;
			font-size: 54px;
			line-height: 100%;
		`,
		reg16: css`
			font-family: 'StarJedi';
			font-style: normal;
			font-weight: normal;
			font-size: 16px;
			line-height: 26px;
		`,
		reg12: css`
			font-family: 'StarJedi';
			font-style: normal;
			font-weight: normal;
			font-size: 12px;
			line-height: 22px;
		`,
		reg26: css`
			font-family: 'StarJedi';

			font-style: normal;
			font-weight: normal;
			font-size: 36px;
			line-height: 100%;
		`
	},
	Oswald: {
		bold54: css`
			font-family: Oswald, sans-serif;
			font-weight: bold;
			font-style: normal;
			font-size: 54px;
			line-height: 80px;
		`,
		bold24: css`
			font-family: Oswald, sans-serif;
			font-style: normal;
			font-weight: bold;
			font-size: 24px;
			line-height: 36px;
		`,
		reg24: css`
			font-family: Oswald, sans-serif;
			font-style: normal;
			font-weight: normal;
			font-size: 24px;
			line-height: 36px;
		`,
		semi24: css`
			font-family: Oswald, sans-serif;
			font-style: normal;
			font-weight: 600;
			font-size: 24px;
			line-height: 36px;
			letter-spacing: 0.2em;
		`,
		ligth24: css`	
			font-family: Oswald, sans-serif;
			font-style: normal;
			font-weight: 300;
			font-size: 14px;
			line-height: 21px;
		`,
		medium: css`
			font-family: Oswald, sans-serif;
			font-style: normal;
			font-weight: 500;
			font-size: 14px;
			line-height: 21px;
		`
	}
}

export {
	Colors,
	Effects,
	Gradients,
	Fonts
}