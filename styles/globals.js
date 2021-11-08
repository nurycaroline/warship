import { createGlobalStyle } from "styled-components";

const StarJediFont = './fonts/star-jedi.ttf';

const GlobalStyle = createGlobalStyle`
	@font-face {
    font-family: 'StarJedi';
    src: url(${StarJediFont}) format('ttf');
  }

	* {
		font-size: 16px;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	
	html {
		scroll-behavior: smooth;
		line-height: 1.15;
		-webkit-text-size-adjust: 100%;
	}

	input,
	textarea,
	button,
	select,
	a {
		-webkit-tap-highlight-color: rgba(0,0,0,0);
	}

	strong, u {
		font-size: inherit;
	}

	button, input {
		outline: none;
		border: none;
		background: none;
	}

	button {
		cursor: pointer;
	}

	ul {
		list-style: none;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`;

export default GlobalStyle;
