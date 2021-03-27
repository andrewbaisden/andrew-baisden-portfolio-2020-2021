import React, { Fragment, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Nav from '../components/Nav';

const HeaderContainer = styled.header`
	position: absolute;
	z-index: 2;
	width: 100%;
`;

const VideoBGContainer = styled.div`
	position: relative;
	z-index: 2;
	width: 100%;
`;

const VideoBGImg = styled.div`
	position: relative;
	z-index: 8;
	width: 100%;
	height: 90rem;
	background: ${(props) => props.background || '#2A3642'};
	background-size: cover;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		height: 77rem;
		background: ${(props) => props.background || '#2A3642'};
		background-size: 195% 95%;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		height: 77rem;
		background: ${(props) => props.background || '#2A3642'};
		background-size: 195% 95%;
	}
`;

const HeaderLogoBG = styled.div`
	position: absolute;
	z-index: 8;
	top: 0;
	left: 0;
	background: url('/assets/img/logo-bg.svg');
	width: 34.5rem;
	height: 60rem;

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		display: none;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		display: none;
	}
`;

const Logo = styled.img`
	width: 6rem;
	height: 6.3rem;
	cursor: pointer;
`;

const SiteDescription = styled.section`
	margin-top: 2rem;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`;

const SiteLogo = styled.div`
	display: flex;
	flex-flow: row nowrap;
`;

const SiteInfo = styled.div`
	margin-left: 2rem;
`;

const SiteInfoList = styled.ul`
	list-style: none;
`;

const ToggleTheme = styled.div`
	margin-top: 8rem;
	margin-right: 10rem;
`;

const MyName = styled.div`
	position: absolute;
	bottom: 20rem;
	left: 20rem;
	display: flex;
	flex-flow: row nowrap;
	color: #ffffff;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		left: 2rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		left: 2rem;
	}
`;

const MyNameLogo = styled.img`
	height: 10rem;
	display: ${(props) => props.display || 'block'};

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		height: 5.7rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		height: 5.7rem;
	}
`;

const MyNameHeading = styled.h1`
	font-size: 10.7rem;
	line-height: 12rem;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		font-size: 7rem;
		line-height: 6rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		font-size: 7rem;
		line-height: 6rem;
	}
`;

const ThemeButton = styled.div`
	cursor: pointer;
`;

const DevCommunityContainer = styled.section`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	width: 18rem;
	position: absolute;
	left: 1.5rem;
	top: 9rem;
`;

const DevCommunityImg = styled.img`
	width: 2rem;
	height: 2rem;
`;

const DevCommunity = styled.div`
	margin: 0rem;
`;

const DevLink = styled.a`
	display: block;
	height: 100%;
	width: 100%;
	padding: 2rem;
	background: #2a3642;
	transition: background 1s;

	:hover {
		background: #f30a2e;
	}
`;

const FooterSiteInfo = styled.div`
	text-align: center;
	font-size: 1.2rem;
	position: absolute;
	top: 24rem;
	width: 15rem;
	left: 0.7rem;
`;

const FooterSitePara = styled.p`
	font-size: 1.1rem;
	line-height: 1.8rem;
`;

const Header = (props) => {
	const getYear = () => {
		const date = new Date();
		const year = date.getFullYear();
		return year;
	};
	const refToggleTheme = useRef(null);
	const toggleTheme = () => {
		document.body.classList.toggle('dark');
		localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
		document.body.classList.contains('dark')
			? refToggleTheme.current.classList.add('dark') && refToggleTheme.current.classList.remove('light')
			: refToggleTheme.current.classList.add('light') && refToggleTheme.current.classList.remove('dark');

		if (localStorage.getItem('theme') === 'dark') {
			document.body.classList.add('dark');
			refToggleTheme.current.classList.add('dark');
			refToggleTheme.current.classList.remove('light');
		}
	};
	return (
		<Fragment>
			<HeaderContainer>
				<VideoBGContainer>
					<VideoBGImg background={props.background}>
						<HeaderLogoBG>
							<SiteDescription>
								<SiteLogo>
									<Link href="/">
										<Logo src="/assets/img/logo_colour.svg" alt="Andrew Baisden Logo" />
									</Link>
									<SiteInfo>
										<SiteInfoList>
											<li>Andrew Baisden</li>
											<li>Full Stack Developer</li>
										</SiteInfoList>
									</SiteInfo>
								</SiteLogo>
								<DevCommunityContainer>
									<DevCommunity>
										<DevLink href="https://github.com/andrewbaisden" target="_blank" rel="noopener noreferrer nofollow">
											<DevCommunityImg src="/assets/img/github.svg" alt="GitHub" />
										</DevLink>
									</DevCommunity>
									<DevCommunity>
										<DevLink href="https://dev.to/andrewbaisden" target="_blank" rel="noopener noreferrer nofollow">
											<DevCommunityImg src="/assets/img/dev.svg" alt="Dev" />
										</DevLink>
									</DevCommunity>
									<DevCommunity>
										<DevLink
											href="https://andrewbaisden.hashnode.dev/"
											target="_blank"
											rel="noopener noreferrer nofollow"
										>
											<DevCommunityImg src="/assets/img/hashnode.svg" alt="Hashnode" />
										</DevLink>
									</DevCommunity>
									<DevCommunity>
										<DevLink
											href="https://twitter.com/andrewbaisden"
											target="_blank"
											rel="noopener noreferrer nofollow"
										>
											<DevCommunityImg src="/assets/img/twitter.svg" alt="Twitter" />
										</DevLink>
									</DevCommunity>
									<DevCommunity>
										<DevLink
											href="https://www.instagram.com/andrewbaisden/"
											target="_blank"
											rel="noopener noreferrer nofollow"
										>
											<DevCommunityImg src="/assets/img/instagram.svg" alt="Instagram" />
										</DevLink>
									</DevCommunity>
									<DevCommunity>
										<DevLink
											href="https://www.linkedin.com/in/andrew-baisden/"
											target="_blank"
											rel="noopener noreferrer nofollow"
										>
											<DevCommunityImg src="/assets/img/linkedin.svg" alt="Linkedin" />
										</DevLink>
									</DevCommunity>
								</DevCommunityContainer>
								<FooterSiteInfo>
									<div>
										<FooterSitePara>
											<a href="https://jamstack.org/" target="_blank" rel="noopener noreferrer nofollow">
												JAMSTACK
											</a>
											website built with
											<a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer nofollow">
												Next.js
											</a>
											hosted on
											<a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer nofollow">
												Netlify
											</a>
											source code on
											<a href="https://github.com" target="_blank" rel="noopener noreferrer nofollow">
												Github
											</a>
										</FooterSitePara>
										<FooterSitePara>&copy; {getYear()} Andrew Baisden. All Rights Reserved. &reg;</FooterSitePara>
									</div>
								</FooterSiteInfo>
								{/* <ToggleTheme>
									<ThemeButton onClick={toggleTheme} ref={refToggleTheme} className="light"></ThemeButton>
								</ToggleTheme> */}
							</SiteDescription>
						</HeaderLogoBG>
						<Nav />
						<MyName>
							<MyNameLogo display={props.logoDisplay} src="/assets/img/logo_white.svg" alt="Andrew Baisden Logo" />
							<MyNameHeading>{props.pageTitle}</MyNameHeading>
						</MyName>
					</VideoBGImg>
				</VideoBGContainer>
			</HeaderContainer>
		</Fragment>
	);
};

export default Header;
