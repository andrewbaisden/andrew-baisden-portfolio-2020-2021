import React, { Fragment } from 'react';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';

const MenuStyle = createGlobalStyle`
.header {
  background-color: #ffffff;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 7;

  /* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  
  //CSS
  display: none;
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  
  //CSS
  display: none;
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  
  //CSS
  display: none;
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
  //CSS
  display: none;
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  
  //CSS
  display: block;
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  
  //CSS
  display: block;
}
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

.header li a {
  display: block;
  padding: 2rem 2rem;
  border-right: 0.2rem solid var(--base-color);
  text-decoration: none;
  background: #ffffff;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #E5E5E5;
}

.header .logo {
  display: block;
  float: left;
  font-size: 3rem;
  padding: 1rem 2rem;
  text-decoration: none;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  /* display: inline-block; */
  float: right;
  padding: 2.8rem 2rem;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #3C4753;
  display: block;
  height: 0.2rem;
  position: relative;
  transition: background .2s ease-out;
  width: 1.8rem;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #3C4753;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 0.5rem;
}

.header .menu-icon .navicon:after {
  top: -0.5rem;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 83rem;
  width: 100%;
  position: absolute;
  z-index: 16;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}
`;

const MainNavContainer = styled.div`
	position: absolute;
	z-index: 7;
	top: 0;
	right: 0;
	width: 100%;
`;

const MainNav = styled.nav`
	display: flex;
	flex-flow: row nowrap;
	background: #ffffff;
	justify-content: flex-end;
	/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

	@media (min-width: 1281px) {
		//CSS
		display: flex;
	}

	/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

	@media (min-width: 1025px) and (max-width: 1280px) {
		//CSS
		display: flex;
	}

	/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

	@media (min-width: 768px) and (max-width: 1024px) {
		//CSS
		display: flex;
	}

	/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		//CSS
		display: flex;
	}

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

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

const LinkNav = styled.a`
	color: var(--primary-font-colour);
	cursor: pointer;
	padding: 1rem;
	width: 9rem;
	text-align: center;
	transition: background 1s;

	:hover {
		background: #f30a2e;
		color: #ffffff;
	}
`;

const Logo = styled.img`
	width: 5rem;
	height: 4.7rem;
	margin-left: 2rem;
	margin-top: 1rem;
	cursor: pointer;
`;

const LinkNavMobile = styled.a`
	color: #3c4753;

	:visited {
		color: #3c4753;
	}
`;

const DevLink = styled.a`
	display: block;
	height: 100%;
	width: 100%;
`;

const DevCommunityImg = styled.img`
	width: 2rem;
	height: 2rem;
	background: #2a3642;
`;

const SiteInfoMobile = styled.div`
	font-size: 1.2rem;
	padding: 0 1rem 0 2rem;
	font-weight: bold;
	text-align: center;
	background: #65bfb6;
`;

const Nav = () => {
	const getYear = () => {
		const date = new Date();
		const year = date.getFullYear();
		return year;
	};
	return (
		<Fragment>
			<MenuStyle />
			{/* <_app /> */}
			<MainNavContainer>
				<MainNav>
					<Link href="/">
						<LinkNav>Home</LinkNav>
					</Link>
					<Link href="/about">
						<LinkNav>About</LinkNav>
					</Link>
					<Link href="/portfolio">
						<LinkNav>Portfolio</LinkNav>
					</Link>
					<Link href="/uses">
						<LinkNav>Uses</LinkNav>
					</Link>
					<Link href="/connect">
						<LinkNav>Connect</LinkNav>
					</Link>
				</MainNav>
				<section className="header">
					<Link href="/">
						<Logo src="/assets/img/logo_colour.svg" alt="Andrew Baisden Logo" />
					</Link>

					<input className="menu-btn" type="checkbox" id="menu-btn" />
					<label className="menu-icon" htmlFor="menu-btn">
						<span className="navicon"></span>
					</label>
					<ul className="menu">
						<li>
							<Link href="/">
								<LinkNavMobile href="/">Home</LinkNavMobile>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<LinkNavMobile href="/about">About</LinkNavMobile>
							</Link>
						</li>
						<li>
							<Link href="/portfolio">
								<LinkNavMobile href="/portfolio">Portfolio</LinkNavMobile>
							</Link>
						</li>
						<li>
							<Link href="/uses">
								<LinkNavMobile href="/uses">Uses</LinkNavMobile>
							</Link>
						</li>
						<li>
							<Link href="/connect">
								<LinkNavMobile href="/connect">Connect</LinkNavMobile>
							</Link>
						</li>

						<li>
							<DevLink href="https://github.com/andrewbaisden" target="_blank" rel="noopener noreferrer nofollow">
								<DevCommunityImg src="/assets/img/github.svg" alt="GitHub" />
							</DevLink>
						</li>
						<li>
							<DevLink href="https://dev.to/andrewbaisden" target="_blank" rel="noopener noreferrer nofollow">
								<DevCommunityImg src="/assets/img/dev.svg" alt="Dev" />
							</DevLink>
						</li>
						<li>
							<DevLink href="https://andrewbaisden.hashnode.dev/" target="_blank" rel="noopener noreferrer nofollow">
								<DevCommunityImg src="/assets/img/hashnode.svg" alt="Hashnode" />
							</DevLink>
						</li>
						<li>
							<DevLink href="https://twitter.com/andrewbaisden" target="_blank" rel="noopener noreferrer nofollow">
								<DevCommunityImg src="/assets/img/twitter.svg" alt="Twitter" />
							</DevLink>
						</li>
						<li>
							<DevLink
								href="https://www.instagram.com/andrewbaisden/"
								target="_blank"
								rel="noopener noreferrer nofollow"
							>
								<DevCommunityImg src="/assets/img/instagram.svg" alt="Instagram" />
							</DevLink>
						</li>
						<li>
							<DevLink
								href="https://www.linkedin.com/in/andrew-baisden/"
								target="_blank"
								rel="noopener noreferrer nofollow"
							>
								<DevCommunityImg src="/assets/img/linkedin.svg" alt="Linkedin" />
							</DevLink>
						</li>
						<li>
							<SiteInfoMobile>
								JAMSTACK website built with Next.js hosted on Netlify source code on Github &copy; {getYear()} Andrew
								Baisden. All Rights Reserved. &reg;
							</SiteInfoMobile>
						</li>
					</ul>
				</section>
			</MainNavContainer>
		</Fragment>
	);
};

export default Nav;
