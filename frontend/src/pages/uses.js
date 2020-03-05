import React, { Fragment } from 'react';
import HelmetPage from '../components/HelmetPage';
import ContainerUses from '../components/ContainerUses';
import GlobalStyles from '../components/GlobalStyles';

const Uses = () => {
	return (
		<Fragment>
			<HelmetPage />
			<GlobalStyles />
			<ContainerUses />
		</Fragment>
	);
};

export default Uses;
