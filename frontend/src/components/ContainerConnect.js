import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header';
import MainConnect from './MainConnect';
import Footer from './Footer';

const PageContainer = styled.div`
	width: 100%;
	/* max-width: 96rem; */
	margin: auto;
`;

const pageState = {
	backgroundImageDesktop: "url('/assets/img/connect.jpg') no-repeat 100%;",
	backgroundImageMobile: "url('/assets/img/connect.jpg') no-repeat 100%;",
	logoDisplay: 'none',
	pageTitle: 'connect'
};

const topPosition = '180rem';

const Container = () => {
	return (
		<Fragment>
			<PageContainer>
				<Header
					background={pageState.backgroundImageDesktop}
					logoDisplay={pageState.logoDisplay}
					pageTitle={pageState.pageTitle}
				/>
				<MainConnect />
				<Footer topPosition={topPosition} />
			</PageContainer>
		</Fragment>
	);
};

export default Container;
