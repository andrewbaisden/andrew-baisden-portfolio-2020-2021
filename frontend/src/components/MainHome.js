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
		width: 70rem;
		background: #ffffff;
		height: 65rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		z-index: 1;
		width: 59rem;
		background: #ffffff;
		height: 65rem;
	}
`;

const PageIntroHeading = styled.h1`
	font-weight: 700;
	font-size: 3rem;
	margin-bottom: 2rem;
	color: #3c4753;
	padding: 2rem 0 0rem 0;
`;

const PageIntroPara = styled.p`
	margin: 2rem 0 2rem 0;
`;

const MainContainer = styled.main`
	position: relative;
	width: 100%;
	margin: auto;
	display: flex;
	/* justify-content: flex-end; */
`;

const TechStackContainer = styled.section`
	position: absolute;
	width: 100%;
	z-index: 2;
	top: 140rem;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		top: 160rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		top: 160rem;
	}
`;

const TechStack = styled.div`
	width: 21.45rem;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		margin-top: 3rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		margin-top: 3rem;
	}
`;
const TechStackImg = styled.img`
	width: 21.45rem;
	height: 23.8rem;
`;
const TechStackPara = styled.p`
	text-align: center;
`;

const DesignContainer = styled.section`
	position: absolute;
	width: 100%;
	top: 190rem;
	display: flex;
	flex-flow: column wrap;
	z-index: 4;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 767px) and (max-width: 860px) {
		//CSS
		top: 260rem;
	}

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		top: 260rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		top: 340rem;
	}
`;

const DesignIntro = styled.div`
	text-align: center;
	margin: auto;
`;

const DesignImg = styled.img`
	width: 21.545rem;
	height: 23.868rem;
`;

const DesignToolsContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
`;

const DesignTools = styled.div`
	width: 21.545rem;
	text-align: center;
`;

const DesignHeading = styled.h1`
	font-size: 5rem;
	line-height: 5rem;
	font-weight: 700;
	margin: 3rem 0 2rem 0;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		font-size: 3rem;
		line-height: 3rem;
		text-align: center;
		padding: 2rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		font-size: 3rem;
		line-height: 3rem;
		text-align: center;
		padding: 2rem;
	}
`;

const DesignPara = styled.p`
	margin: 5rem auto;
	width: 100%;
	max-width: 100rem;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		padding: 4rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		padding: 4rem;
	}
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

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		top: 140rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		top: 140rem;
	}
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
	background: #ffffff;
	width: 100%;
	height: 33rem;
	top: 90rem;
`;

const HeadingLine = styled.div`
	background: #f30a2e;
	-webkit-box-shadow: 22px 11px 5px 0px rgba(194, 194, 194, 1);
	-moz-box-shadow: 22px 11px 5px 0px rgba(194, 194, 194, 1);
	box-shadow: 22px 11px 5px 0px rgba(194, 194, 194, 1);
	height: 0.5rem;
	width: 18rem;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		margin-left: 4rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		margin-left: 4rem;
	}
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

const Main = () => {
	return (
		<Fragment>
			<MainContainer>
				<PageIntroContainer>
					<HeadingLine></HeadingLine>
					<PageIntroHeading>Full Stack Developer</PageIntroHeading>
					<PageIntroPara>
						Like everything in life my passion for programming came from an experience. Gaming to be exact. I was always
						so amazed at the incredible things that you could do there is no better feeling than bringing something to
						life.
					</PageIntroPara>

					<PageIntroPara>
						Over the years I have constantly worked on evolving my skills and I have now settled on a very modern
						developer workflow. It consists of using the MERN Stack (Mongo, Express, React, Node). They are very
						powerful tools and I like how they can be used to build all types of applications. For the web, mobile and
						desktop. The Apps i create follow
						<a href="https://jamstack.org/" target="_blank" rel="noopener noreferrer nofollow">
							JAMSTACK
						</a>
						principles.
					</PageIntroPara>
				</PageIntroContainer>
				<PageIntroBG></PageIntroBG>
				<PageTitle>
					<PageTitleHeading>Tech stack</PageTitleHeading>
				</PageTitle>
				<DiagonalBG></DiagonalBG>
				<TechStackContainer>
					<TechStack>
						<TechStackImg src="/assets/img/mongodb.webp" alt="MongoDB" />
						<TechStackPara>
							MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program,
							MongoDB uses JSON-like documents with schema.
						</TechStackPara>
					</TechStack>
					<TechStack>
						<TechStackImg src="/assets/img/express.webp" alt="Express.js" />
						<TechStackPara>
							Express.js, or simply Express, is a web application framework for Node.js. It is designed for building web
							applications and APIs.
						</TechStackPara>
					</TechStack>
					<TechStack>
						<TechStackImg src="/assets/img/react.webp" alt="React.js" />
						<TechStackPara>
							React is a JavaScript library for building user interfaces. React can be used as a base in the development
							of single-page or mobile applications.
						</TechStackPara>
					</TechStack>
					<TechStack>
						<TechStackImg src="/assets/img/nodejs.webp" alt="Node.js" />
						<TechStackPara>
							Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code
							outside of a browser.
						</TechStackPara>
					</TechStack>
				</TechStackContainer>

				<DesignContainer>
					<DesignIntro>
						<HeadingLine></HeadingLine>
						<DesignHeading>OMG a Developer who has an eye for design!</DesignHeading>
						<DesignPara>
							No templates or themes this site is 100% custom and designed using Figma! I learned Photoshop before i was
							writing lines of code to be fair. I like being versatile and this ability to design my own creatives if i
							need to makes me unique as not all Developers can work with design tools.
						</DesignPara>
					</DesignIntro>
					<DesignToolsContainer>
						<DesignTools>
							<DesignImg src="/assets/img/photoshop.webp" alt="Adobe Photoshop" />
							<p>
								Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS.
							</p>
						</DesignTools>
						<DesignTools>
							<DesignImg src="/assets/img/figma.webp" alt="Figma" />
							<p>Figma is a vector based design and prototype tool which is used for creating User Interfaces (UI).</p>
						</DesignTools>
					</DesignToolsContainer>
				</DesignContainer>
			</MainContainer>
		</Fragment>
	);
};

export default Main;
