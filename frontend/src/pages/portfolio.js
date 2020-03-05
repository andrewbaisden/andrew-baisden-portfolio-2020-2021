import React, { Fragment } from 'react';
import HelmetPage from '../components/HelmetPage';
import ContainerPortfolio from '../components/ContainerPortfolio';
import GlobalStyles from '../components/GlobalStyles';

const Portfolio = () => {
	return (
		<Fragment>
			<HelmetPage />
			<GlobalStyles />
			<ContainerPortfolio />
		</Fragment>
	);
};

export default Portfolio;
