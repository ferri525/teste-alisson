import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes';
import GlobalStyle from './GlobalStyle';
import TextProvider from './components/TextProvider'

ReactDOM.render(
	<TextProvider>
		<GlobalStyle />
		<Routes />
	</TextProvider>,
	document.getElementById('root')
);
