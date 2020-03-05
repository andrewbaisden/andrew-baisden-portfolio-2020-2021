import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Main404 from './Main404';
import Footer from './Footer';

const PageContainer = styled.div`
	width: 100%;
	/* max-width: 96rem; */
	margin: auto;
`;

const pageState = {
	backgroundImageDesktop: "url('/assets/img/404.jpg') no-repeat 100%;",
	backgroundImageMobile: "url('/assets/img/404.jpg') no-repeat 100%;",
	logoDisplay: 'none',
	pageTitle: '404 Page Not Found'
};

const topPosition = '180rem';

const Container = ({ statusCode }) => {
	return (
		<Fragment>
			<PageContainer>
				<Header
					background={pageState.backgroundImageDesktop}
					logoDisplay={pageState.logoDisplay}
					pageTitle={pageState.pageTitle}
				/>
				<Main404 statusCode={statusCode} />
				<Footer topPosition={topPosition} />
			</PageContainer>
		</Fragment>
	);
};

export default Container;
