import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { useWindowSize, useWindowWidth, useWindowHeight } from '@react-hook/window-size';
import Header from './Header';
import MainHome from './MainHome';
import Footer from './Footer';

const PageContainer = styled.div`
	width: 100%;
	/* max-width: 96rem; */
	margin: auto;
`;

const pageState = {
	backgroundImageDesktop: "url('/assets/img/home.jpg') no-repeat 100%;",
	backgroundImageMobile: "url('/assets/img/home_mobile.jpg') no-repeat 100%;",
	logoDisplay: 'block',
	pageTitle: 'ndrew'
};

const Container = () => {
	const [width, height] = useWindowSize();
	const [footerTop, setFooterTop] = useState('');
	const [bgImage, setBgImage] = useState(pageState.backgroundImageDesktop);

	const onResize = () => {
		const windowWidth = width;
		const windowHeight = height;

		if (windowWidth <= 481) {
			// Code not currently in use
			// setFooterTop('480rem');
			setBgImage(pageState.backgroundImageMobile);
			// console.log('Less than 481 as it is', windowWidth + 'px');
			// console.log('Footer Top Position is set to', footerTop);
		} else if (windowWidth > 767) {
			// Code not currently in use
			// setFooterTop('260rem');
			setBgImage(pageState.backgroundImageDesktop);
			// console.log('Greater than 481 as it is', windowWidth + 'px');
			// console.log('Footer Top Position is set to', footerTop);
		}
	};

	if (typeof window !== 'undefined') {
		window.addEventListener('resize', onResize);
	}

	return (
		<Fragment>
			<PageContainer>
				<Header background={bgImage} logoDisplay={pageState.logoDisplay} pageTitle={pageState.pageTitle} />
				<MainHome />
				<Footer topPosition={footerTop} />
			</PageContainer>
		</Fragment>
	);
};

export default Container;
