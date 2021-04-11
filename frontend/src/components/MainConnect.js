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
		width: 59rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		z-index: 1;
		width: 59rem;
	}
`;

const GmailIcon = styled.img`
	/* margin-top: 10rem; */
	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		margin-left: 6rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		margin-left: 6rem;
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
	color: #3c4753;
	font-size: 10rem;
	font-weight: bold;
	margin: 4.2rem;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		font-size: 5rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		font-size: 5rem;
	}
`;

const PageIntroBG = styled.div`
	position: absolute;
	/* background: #ffffff; */
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
	z-index: -1;
`;

const ConnectText = styled.p`
	text-align: center;
	margin: 0 2rem 0 2rem;
	width: 100%;
	max-width: 120rem;
`;

const MainConnect = () => {
	return (
		<Fragment>
			<MainContainer>
				<PageIntroContainer>
					<GmailIcon src="/assets/img/gmail.svg" alt="Gmail" />
				</PageIntroContainer>
				<PageIntroBG></PageIntroBG>
				<PageTitle>
					<PageTitleHeading>connect</PageTitleHeading>
				</PageTitle>
				<DiagonalBG></DiagonalBG>
				<ConnectContainer>
					<ConnectText>
						Hey there! If you have a question, work or request. Or if you are a developer who wants to connect or
						collaborate on some sort of project. Then shoot me a quick message at
						<a href="mailto:andrewbaisden@gmail.com" target="_blank" rel="noopener noreferrer nofollow">
							andrewbaisden@gmail.com
						</a>
						and I will get back to you ASAP. Otherwise feel free to connect with me on one of my other
						<a href="https://linktr.ee/andrewbaisden" target="_blank" rel="noreferrer noopener">
							blogs and platforms
						</a>
						.
						<br />
						<br />
						Peace! ✌️
					</ConnectText>
				</ConnectContainer>
			</MainContainer>
		</Fragment>
	);
};

export default MainConnect;
