import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`
:root {
  --primary-font-colour: #3C4753; 
  --secondary-font-colour: #FFFFFF; 
}
html {
	font-size: 62.5%; /* font-size 1rem = 10px on default browser settings */
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
/* Light mode */
body {
	font-size: 1.6rem;
	font-family: 'Fira Sans', Arial, Helvetica, sans-serif;
	background: #F7F8FA;
	color: var(--primary-font-colour);
	line-height: 3rem;
}

a {
	color: #F30A2E;
	text-decoration: none;
	padding: 0.4rem;
}

a:visited {
	color: #F30A2E;
}
/* Dark mode */
body.dark {
	font-size: 1.6rem;
	font-family: 'Fira Sans', Arial, Helvetica, sans-serif;
    background: #2F736C;
    color: var(--secondary-font-colour);
	line-height: 3rem;
}

.light {
	background: url('/assets/img/theme_light.svg');
	height: 5rem;
	width: 5rem;
}

.dark {
	background: url('/assets/img/theme_dark.svg');
	height: 5rem;
	width: 5rem;
}

`;

const GlobalStyles = () => {
	return (
		<div>
			<GlobalCSS />
		</div>
	);
};

export default GlobalStyles;
