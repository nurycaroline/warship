import {Colors, Effects, Gradients} from '.'

const Themes = {
	sith: {
		primary: Colors.red,
		primaryDark: Colors.redDark,

		primaryGradientLight: Gradients.redLight,
		primaryGradientDark: Gradients.redDark,

		primaryEffectsSmall: Effects.redSmall,
		primaryEffects: Effects.red,
	},
	jedi: {
		primary: Colors.blue,
		primaryDark: Colors.blueDark,

		primaryGradientLight: Gradients.blueLight,
		primaryGradientDark: Gradients.blueDark,

		primaryEffectsSmall: Effects.blueSmall,
		primaryEffects: Effects.blue,
		
	}
}

export default Themes