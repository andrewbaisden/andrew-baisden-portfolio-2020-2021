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
		width: 60rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		z-index: 1;
		width: 60rem;
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
	height: 193.7rem;
	right: 0;
	width: 107.6rem;
`;

const AboutText = styled.p`
	text-align: left;
	margin: 0 2rem 0 2rem;
	width: 100%;
	max-width: 120rem;
`;

const AboutHeadingH1 = styled.h1`
	font-size: 3rem;
	margin: 0 0 2rem 0;
`;

const AboutPara = styled.p`
	margin: 2rem 0 2rem 0;
`;

const AboutList = styled.ol`
	margin: 0 0 2rem 2rem;
`;
const ProfileStats = styled.ul`
	margin: 0;
	padding: 6px 0 6px 4px;
	list-style: none;
`;

const ProfileLI = styled.li`
	height: 5rem;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		font-size: 1.2rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		font-size: 1.2rem;
	}
`;

const ProfileIcon = styled.img`
	height: 2rem;
	width: 2rem;
	margin: 2rem 1rem 0 0;
	position: relative;
	top: 0.3rem;
`;

const ProfileStatsLocation = styled.p`
	padding: 2rem;
	width: 40rem;
	border: 0.2rem solid #3c4753;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		font-size: 1.2rem;
		width: 34.5rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		font-size: 1.2rem;
		width: 34.5rem;
	}
`;

const MainAbout = () => {
	return (
		<Fragment>
			<MainContainer>
				<PageIntroContainer>
					<ProfileStats>
						<ProfileLI>
							<ProfileIcon src="/assets/img/website.svg" alt="Website" />
							Full Stack Developer, Creative, Anime and Gamer
						</ProfileLI>
						<ProfileLI>
							<ProfileIcon src="/assets/img/global.svg" alt="Website" />
							Black, Speaks English, Working on new Apps
						</ProfileLI>
						<ProfileLI>
							<ProfileIcon src="/assets/img/food.svg" alt="Website" />
							Never smokes, Drinks socially, Omnivore
						</ProfileLI>
					</ProfileStats>
					<ProfileStatsLocation>
						Looking for work, within 1000 km, short & long term roles and remote
					</ProfileStatsLocation>
				</PageIntroContainer>
				<PageIntroBG></PageIntroBG>
				<PageTitle>
					<PageTitleHeading>about</PageTitleHeading>
				</PageTitle>
				<DiagonalBG></DiagonalBG>
				<ConnectContainer>
					<AboutText>
						<AboutHeadingH1>My self-summary</AboutHeadingH1>

						<AboutPara>
							Hey I’m Andrew a Full Stack Developer from London, England. Programming is one of my passions in life.
							Over the years I have worked with different technical stacks and at the moment I have settled on a fairly
							modern one. React on the Frontend and Node.js on the Backend. I really enjoy the freedom of thinking about
							something creative. And then building it with the tools and knowledge that you know. The majority of my
							most recent skills have been self taught. I find that it is one of the best ways to learn as you can go at
							your own pace.
						</AboutPara>

						<AboutHeadingH1>What i’m doing with my life</AboutHeadingH1>

						<AboutPara>Learning because knowledge is power and power is power!</AboutPara>

						<AboutHeadingH1>I’m really good at</AboutHeadingH1>

						<AboutPara>
							Working really hard to get the MVP. No not the Minimum Viable Product I mean the Most Valuable Player
							award when I win playing Apex Legends and Call of Duty! In my downtime i do like to build apps too 😇
						</AboutPara>

						<AboutHeadingH1>Favourite books, movies, shows, music and food</AboutHeadingH1>

						<AboutPara>
							My preference is Audibile when it comes to books as i find that it’s a fast way to learn. I read almost
							anything lately it has been a lot of personal development. Huge movie buff anything Marvel or DC will do
							as well. Stream a lot of shows shout out to… The Mandalorian and Stranger Things! I also watch a lot of
							anime as well plus read manga. And i will eat almost anything if there is chicken in it! The cliche… 😜
						</AboutPara>

						<AboutHeadingH1>The six things I could never do without</AboutHeadingH1>

						<AboutList>
							<li>Visual Studio Code</li>
							<li>My MacBook</li>
							<li>My iPhone</li>
							<li>Coffee</li>
							<li>Food</li>
							<li>Internet</li>
						</AboutList>

						<AboutHeadingH1>I spend a lot of time thinking about</AboutHeadingH1>

						<AboutPara>
							Is this turning into a dating profile? I hope not it was only supposed to be a joke! 😉 🙃
						</AboutPara>

						<AboutHeadingH1>I’m looking for</AboutHeadingH1>

						<AboutPara>
							Developers, companies, people and anyone creative. Working with modern technology stacks and open source
							frameworks is important to me as is building interesting and fun applications. If you can offer excitement
							and a fun and dynamic environment with multiple prospects for career progression and exploration. Then i’m
							up for it!
						</AboutPara>

						<AboutHeadingH1>You should message me if</AboutHeadingH1>

						<AboutPara>
							You are not a recruiter. As much as i enjoy Linkedin notifications I would much prefer notifications from
							more entertaining apps 🙃 Only kidding i welcome all hahaha 🤣 Anything short term, long term or remote
							will do. Feel free to connect with me on social media as well.
						</AboutPara>
					</AboutText>
				</ConnectContainer>
			</MainContainer>
		</Fragment>
	);
};

export default MainAbout;
