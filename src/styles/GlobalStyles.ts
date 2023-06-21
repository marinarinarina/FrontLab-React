import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	*:focus {
    outline: none;
  }
  *::-webkit-scrollbar {
    display: none;
  }
	html {
		height: -webkit-fill-available;
	}
	html, body, #root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		font-size: 14px;
	}
`;

export default GlobalStyles;
