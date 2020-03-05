import React, { Fragment } from 'react';
import HelmetPage from '../components/HelmetPage';
import Container404 from '../components/Container404';
import GlobalStyles from '../components/GlobalStyles';

const Error = ({ statusCode }) => {
	return (
		<Fragment>
			<HelmetPage />
			<GlobalStyles />
			<Container404 statusCode={statusCode} />
		</Fragment>
	);
};

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
