import React, { Fragment } from 'react';
import HelmetPage from '../components/HelmetPage';
import ContainerAbout from '../components/ContainerAbout';
import GlobalStyles from '../components/GlobalStyles';

const About = () => {
	return (
		<Fragment>
			<HelmetPage />
			<GlobalStyles />
			<ContainerAbout />
		</Fragment>
	);
};

export default About;
