import React, { Fragment } from 'react';
import styled from 'styled-components';

const PageIntroContainer = styled.article`
	position: absolute;
	width: 96.2rem;
	height: 48rem;
	z-index: 2;
	top: 75rem;
	right: 0;
	background: url('/assets/img/intro_page_bg.svg') no-repeat center center;
	padding: 6rem 4rem 0 24rem;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		z-index: 1;
		width: 49rem;
		padding: 0;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		z-index: 1;
		width: 49rem;
		padding: 0;
	}
`;

const MainContainer = styled.main`
	position: relative;
	width: 100%;
	margin: auto;
	display: flex;
	/* justify-content: flex-end; */
`;

const ConnectContainer = styled.section`
	position: absolute;
	width: 100%;
	z-index: 2;
	top: 140rem;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
`;

const PageTitle = styled.div`
	position: absolute;
	width: 100%;
	height: 9rem;
	z-index: 2;
	top: 122.7rem;
	background: #ffffff;
	text-align: center;
	text-transform: lowercase;
`;

const PageTitleHeading = styled.h1`
	color: #f7f8fa;
	font-size: 10rem;
	font-weight: bold;
	margin: 3rem;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		font-size: 3rem;
		line-height: 3rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		font-size: 3rem;
		line-height: 3rem;
	}
`;

const PageIntroBG = styled.div`
	position: absolute;
	background: #ffffff;
	width: 100%;
	height: 33rem;
	top: 90rem;
`;

const DiagonalBG = styled.div`
	position: absolute;
	top: 112rem;
	background: url('/assets/img/diagonal_bg.svg');
	/* background: red; */
	height: 140.7rem;
	right: 0;
	width: 107.6rem;
`;

const NotFoundText = styled.p`
	text-align: center;
	margin: 0 2rem 0 2rem;
	width: 100%;
	max-width: 120rem;
`;

const PageNotFound = styled.h1`
	font-size: 8rem;
	line-height: 8rem;
	text-align: center;
	color: #2a3642;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		font-size: 5rem;
		line-height: 5rem;
		margin: 3rem 0 0 10rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		font-size: 5rem;
		line-height: 5rem;
		margin: 3rem 0 0 10rem;
	}
`;

const MainConnect = ({ statusCode }) => {
	return (
		<Fragment>
			<MainContainer>
				<PageIntroContainer>
					<PageNotFound>404 Page</PageNotFound>
					<PageNotFound>Not Found</PageNotFound>
				</PageIntroContainer>
				<PageIntroBG></PageIntroBG>
				<PageTitle>
					<PageTitleHeading>404 Page Not Found</PageTitleHeading>
				</PageTitle>
				<DiagonalBG></DiagonalBG>
				<ConnectContainer>
					<NotFoundText>
						<p>Oh no it seems that you have become lost... The page that you were looking for does not exist :(</p>
						<p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>
					</NotFoundText>
				</ConnectContainer>
			</MainContainer>
		</Fragment>
	);
};

export default MainConnect;
