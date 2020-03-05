import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { useWindowSize, useWindowWidth, useWindowHeight } from '@react-hook/window-size';
import HeaderAbout from './HeaderAbout';
import MainAbout from './MainAbout';
import Footer from './Footer';

const PageContainer = styled.div`
	width: 100%;
	/* max-width: 96rem; */
	margin: auto;
`;

const pageState = {
	backgroundImageDesktop: '#F7F8FA',
	backgroundImageMobile: '#F7F8FA',
	logoDisplay: 'none',
	pageTitle: ''
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
			// setFooterTop('380rem');
			setBgImage(pageState.backgroundImageMobile);
			// console.log('Less than 481 as it is', windowWidth + 'px');
			// console.log('Footer Top Position is set to', footerTop);
		} else if (windowWidth > 481 && windowWidth <= 576) {
			// Code not currently in use
			// setFooterTop('390rem');
			setBgImage(pageState.backgroundImageDesktop);
			// console.log('Greater than 481 as it is', windowWidth + 'px');
			// console.log('Footer Top Position is set to', footerTop);
		} else if (windowWidth > 911) {
			// Code not currently in use
			// setFooterTop('280rem');
			setBgImage(pageState.backgroundImageDesktop);
			// console.log('Greater than 481 as it is', windowWidth + 'px');
			// console.log('Footer Top Position is set to', footerTop);
		} else if (windowWidth < 911) {
			// Code not currently in use
			// setFooterTop('310rem');
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
				<HeaderAbout
					background={pageState.backgroundImageDesktop}
					logoDisplay={pageState.logoDisplay}
					pageTitle={pageState.pageTitle}
				/>
				<MainAbout />
				<Footer topPosition={footerTop} />
			</PageContainer>
		</Fragment>
	);
};

export default Container;
