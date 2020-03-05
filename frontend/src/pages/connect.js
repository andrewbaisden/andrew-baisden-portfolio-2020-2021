import React, { Fragment } from 'react';
import HelmetPage from '../components/HelmetPage';
import ContainerConnect from '../components/ContainerConnect';
import GlobalStyles from '../components/GlobalStyles';

const Connect = () => {
	return (
		<Fragment>
			<HelmetPage />
			<GlobalStyles />
			<ContainerConnect />
		</Fragment>
	);
};

export default Connect;
