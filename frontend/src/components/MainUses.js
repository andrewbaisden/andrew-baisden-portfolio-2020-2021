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
	background: url('/assets/img/diagonal_bg.svg') no-repeat;
	/* background: red; */
	height: 193.7rem;
	right: 0;
	width: 107.6rem;
	z-index: -1;
`;

const UsesText = styled.p`
	text-align: left;
	margin: 0 2rem 0 2rem;
	width: 100%;
	max-width: 120rem;
`;

const UsesHeadingH1 = styled.h1`
	font-size: 3rem;
	margin: 0 0 2rem 0;
`;
const UsesHeadingH2 = styled.h2`
	font-size: 2rem;
	margin: 0 0 2rem 0;
`;
const UsesHeadingH3 = styled.h3`
	font-size: 1.8rem;
	margin: 0 0 2rem 0;
`;

const UsesList = styled.ul`
	margin: 2rem 0 2rem 0;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		margin-left: 2rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		margin-left: 2rem;
	}
`;

const UsesListTech = styled.ul`
	margin: 2rem 0 2rem 0;
	border: 0.2rem solid #3c4753;
	padding: 4rem;
	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		margin-left: 2rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		margin-left: 2rem;
	}
`;

const GTD = styled.p`
	margin: 2rem 0 2rem 0;
`;

const MainUses = () => {
	return (
		<Fragment>
			<MainContainer>
				<PageIntroContainer>
					<p>
						The following is a list of the tools and software that I use on a daily basis to help me build amazing
						things and stay productive throughout the day. This page was inspired by
						<a href="https://wesbos.com/" target="_blank" rel="noopener noreferrer nofollow">
							Wes Bos
						</a>
						who is a Full Stack Developer and co host on the popular developer podcast
						<a href="https://syntax.fm/" target="_blank" rel="noopener noreferrer nofollow">
							Syntax
						</a>
						. If you are a Developer it would be cool if you also had a page like this on your website which you can add
						here
						<a href="https://uses.tech/" target="_blank" rel="noopener noreferrer nofollow">
							https://uses.tech/
						</a>
					</p>
				</PageIntroContainer>
				<PageIntroBG></PageIntroBG>
				<PageTitle>
					<PageTitleHeading>uses</PageTitleHeading>
				</PageTitle>
				<DiagonalBG></DiagonalBG>
				<ConnectContainer>
					<UsesText>
						<UsesHeadingH1>Desktop</UsesHeadingH1>
						<UsesHeadingH2>Hardware</UsesHeadingH2>
						<UsesList>
							<li>Laptop: Apple MacBook Pro (13", M1, 2020)</li>
							<li>Operating System: macOS</li>
							<li>External Display: LG 27UL850W 4K UHD LED LCD Monitor</li>
							<li>Mouse: Logitech MX Master 3</li>
							<li>Mouse Pad: SteelSeries QcK gaming mouse pad</li>
						</UsesList>

						<UsesHeadingH3>Desktop Apps</UsesHeadingH3>

						<strong>Code Editor Setup</strong>
						<UsesList>
							<li>Code Editor: Visual Studio Code</li>
							<li>Theme: Dracula</li>
							<li>Font: JetBrains Mono</li>
						</UsesList>

						<strong>Command Line Interface (CLI) Setup</strong>

						<UsesList>
							<li>Terminal: Hyper, iTerm 2</li>
							<li>Theme: Dracula</li>
							<li>Shell Configuration: Oh My Zsh</li>
						</UsesList>

						<strong>Technical Stack</strong>
						<UsesListTech>
							<li>Front-End: HTML, CSS, JavaScript, TypeScript, React, React Native, Redux, Flutter/Dart</li>
							<li>Back-End: Python, NodeJS, SQL, NoSQL</li>
							<li>CI/CD: GitHub Actions, CircleCI</li>
							<li>Serverless: Netlify, Vercel, Heroku</li>
							<li>API Testing: Insomnia, Postman</li>
						</UsesListTech>

						<strong>Design</strong>

						<UsesList>
							<li>Graphic Design: Adobe Photoshop</li>
							<li>UI Design and Prototyping: Figma</li>
						</UsesList>

						<UsesHeadingH1>Mobile</UsesHeadingH1>

						<UsesHeadingH2>Hardware</UsesHeadingH2>

						<UsesList>
							<li>Phone: Samsung Galaxy S21 Ultra 5G</li>
							<li>Operating System: Android</li>
						</UsesList>

						<UsesHeadingH3>Mobile Apps</UsesHeadingH3>

						<UsesList>
							<li>Browser: Chrome</li>
							<li>Podcasts: Pocket Casts</li>
							<li>Audio Books: Audible</li>
							<li>Music: Spotify, Apple Music</li>
							<li>Entertainment: YouTube</li>
							<li>Mindfulness: Headspace, Calm</li>
							<li>Messaging: WhatsApp, Telegram, Signal, Discord, Slack</li>
						</UsesList>

						<UsesHeadingH1>Getting Things Done (GTD)</UsesHeadingH1>
						<GTD>
							It’s basically a methodology for making yourself highly productive in your lifestyle. The Apps below are
							the ones i’m using to manage this workflow
							<a href="https://gettingthingsdone.com/" rel="noopener noreferrer nofollow" target="_blank">
								https://gettingthingsdone.com/
							</a>
						</GTD>

						<UsesHeadingH2>Desktop and Mobile Apps</UsesHeadingH2>

						<UsesList>
							<li>Calendar: Apple/Google Calendar</li>
							<li>Email: Apple Email/Gmail</li>
							<li>Productivity: Notion</li>
							<li>To Do: Tick Tick</li>
							<li>Note taking and writing: Typora/Dropbox Paper</li>
							<li>Journaling: Daylio</li>
						</UsesList>
					</UsesText>
				</ConnectContainer>
			</MainContainer>
		</Fragment>
	);
};

export default MainUses;
