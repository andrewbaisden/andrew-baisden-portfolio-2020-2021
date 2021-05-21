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
	height: 193.7rem;
	right: 0;
	width: 107.6rem;
	z-index: -1;
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

const AboutBadges = styled.div`
	margin: 2rem 0 2rem 0;
	flex: row nowrap;
`;

const Badges = styled.a`
	display: inline-block;
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
							Full-Stack Developer, Creative, Anime and Gamer
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
							Hey my name is Andrew, I am a Full-Stack developer who creates web and mobile applications using
							JavaScript. My Front-End framework of choice is React which I use when working on web apps and React
							Native when I am building mobile apps. I am skilled in various areas and believe that makes me versatile
							as I know quite a few different programming languages. I also have experience with Flutter and Dart so
							that is another option when considering cross platform app development.
						</AboutPara>

						<AboutPara>
							Having a great work life balance is important so remote working is preferential considering our current
							circumstances or at the very least a few days remote working which is flexible. I also have experience as
							a blogger and technical writer which not only aids as a learning tool but it is also a great way to engage
							with the developer community.
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
							anime as well plus read manga. And i will eat almost anything.
						</AboutPara>

						<AboutHeadingH1>The six things I could never do without</AboutHeadingH1>

						<AboutList>
							<li>Visual Studio Code</li>
							<li>My MacBook</li>
							<li>My Phone</li>
							<li>Coffee</li>
							<li>Food</li>
							<li>Internet</li>
						</AboutList>

						<AboutHeadingH1>I spend a lot of time thinking about</AboutHeadingH1>

						<AboutPara>
							If we had more sun here in London then people would stop complaining about the rain and complain about the
							heatwave instead 😂
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
							You are human and not a robot. It's a bit too soon for the robot apocalypse 🔥. Contact me with any work
							opportunites that are short term, long term or remote. And feel free to connect with me on social media.
						</AboutPara>

						<AboutHeadingH1>Lets Connect</AboutHeadingH1>

						<AboutPara>
							You can help to support my writing and content creation further by buying me a coffee or joining my
							Patreon. Positive thoughts and gratitude go a long way you can follow me on
							<a href="https://twitter.com/andrewbaisden" target="_blank" rel="noreferrer noopener">
								Twitter
							</a>
							as well as my other
							<a href="https://linktr.ee/andrewbaisden" target="_blank" rel="noreferrer noopener">
								blogs and platforms
							</a>
							which can be found on my website and profiles. Don't forget to check out my other articles as I have a lot
							of content that you will find useful. Peace! ✌️
						</AboutPara>
						<AboutBadges>
							<Badges href="https://www.buymeacoffee.com/andrewbaisden" target="_blank" rel="noreferrer noopener">
								<img
									height="36"
									width="142"
									src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png"
									alt="Buy Me A Coffee"
									// style="height: 60px !important;width: 217px !important;"
								/>
							</Badges>
							<Badges href="https://ko-fi.com/Q5Q6456Q6" target="_blank" rel="noreferrer noopener">
								<img
									height="36"
									width="142"
									src="https://cdn.ko-fi.com/cdn/kofi2.png?v=2"
									border="0"
									alt="Buy Me a Coffee at ko-fi.com"
								/>
							</Badges>
							<Badges href="https://www.patreon.com/andrewbaisden" target="_blank">
								<img height="36" width="142" src="/assets/img/patreon_btn.png" border="0" alt="Join my Patreon" />
							</Badges>
						</AboutBadges>
					</AboutText>
				</ConnectContainer>
			</MainContainer>
		</Fragment>
	);
};

export default MainAbout;
