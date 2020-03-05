import React, { Fragment } from 'react';
import HelmetPage from '../components/HelmetPage';
import ContainerHome from '../components/ContainerHome';
import GlobalStyles from '../components/GlobalStyles';

const App = () => {
	return (
		<Fragment>
			<HelmetPage />
			<GlobalStyles />
			<ContainerHome />
		</Fragment>
	);
};

export default App;
