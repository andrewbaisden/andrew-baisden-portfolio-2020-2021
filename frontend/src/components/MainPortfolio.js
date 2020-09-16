import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import PortfolioWorkPod from './PortfolioWorkPod';

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
	margin: 3.7rem;

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

const PortfolioContent = styled.div`
	margin: 0 2rem 0 2rem;
	width: 100%;
	max-width: 200rem;
`;

const SelectTechSkills = styled.section`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	margin-bottom: 4rem;
`;

const AllBtn = styled.button`
	width: 8.3rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
	border: 0.1rem solid #212933;
	background: #3c4753;
	color: #ffffff;
	transition: background 0.5s;
	margin: 2rem;

	:hover {
		background: #2a3642;
	}
`;

const FullStackBtn = styled.button`
	width: 8.3rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
	border: 0.1rem solid #8d0a0a;
	background: #cb0101;
	color: #ffffff;
	transition: background 0.5s;
	margin: 2rem;

	:hover {
		background: #2a3642;
	}
`;

const FrontEndBtn = styled.button`
	width: 8.3rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
	border: 0.1rem solid #0e9155;
	background: #01cb6f;
	color: #ffffff;
	transition: background 0.5s;
	margin: 2rem;

	:hover {
		background: #2a3642;
	}
`;

const HTMLBtn = styled.button`
	width: 8.3rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
	border: 0.1rem solid #972e13;
	background: #e44d26;
	color: #ffffff;
	transition: background 0.5s;
	margin: 2rem;

	:hover {
		background: #2a3642;
	}
`;

const CSSBtn = styled.button`
	width: 8.3rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
	border: 0.1rem solid #0a34d9;
	background: #264de4;
	color: #ffffff;
	transition: background 0.5s;
	margin: 2rem;

	:hover {
		background: #2a3642;
	}
`;

const JavascriptBtn = styled.button`
	width: 8.3rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
	border: 0.1rem solid #a6960a;
	background: #f5de18;
	color: #000000;
	transition: background 0.5s;
	margin: 2rem;

	:hover {
		background: #2a3642;
		color: #ffffff;
	}
`;

const ReactBtn = styled.button`
	width: 8.3rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
	border: 0.1rem solid #1c7387;
	background: #5ed5f4;
	color: #ffffff;
	transition: background 0.5s;
	margin: 2rem;

	:hover {
		background: #2a3642;
	}
`;

const ReduxBtn = styled.button`
	width: 8.3rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
	border: 0.1rem solid #3d029a;
	background: #7348b7;
	color: #ffffff;
	transition: background 0.5s;
	margin: 2rem;

	:hover {
		background: #2a3642;
	}
`;

const NodeJSBtn = styled.button`
	width: 8.3rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
	border: 0.1rem solid #5d7c11;
	background: #87bf01;
	color: #ffffff;
	transition: background 0.5s;
	margin: 2rem;

	:hover {
		background: #2a3642;
	}
`;

const TypeScriptBtn = styled.button`
	width: 8.3rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
	border: 0.1rem solid #126741;
	background: #3278c6;
	color: #ffffff;
	transition: background 0.5s;
	margin: 2rem;

	:hover {
		background: #2a3642;
	}
`;

const PythonBtn = styled.button`
	width: 8.3rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
	border: 0.1rem solid #126741;
	background: #ffce3d;
	color: #ffffff;
	transition: background 0.5s;
	margin: 2rem;

	:hover {
		background: #2a3642;
	}
`;

const KotlinBtn = styled.button`
	width: 8.3rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
	border: 0.1rem solid #126741;
	background: #6b70fc;
	color: #ffffff;
	transition: background 0.5s;
	margin: 2rem;

	:hover {
		background: #2a3642;
	}
`;

const NoSQLBtn = styled.button`
	width: 8.3rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
	border: 0.1rem solid #1f6120;
	background: #449a45;
	color: #ffffff;
	transition: background 0.5s;
	margin: 2rem;

	:hover {
		background: #2a3642;
	}
`;

const SQLBtn = styled.button`
	width: 8.3rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
	border: 0.1rem solid #143b5b;
	background: #336791;
	color: #ffffff;
	transition: background 0.5s;
	margin: 2rem;

	:hover {
		background: #2a3642;
	}
`;

const GraphQLBtn = styled.button`
	width: 8.3rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
	border: 0.1rem solid #6c094c;
	background: #e535ab;
	color: #ffffff;
	transition: background 0.5s;
	margin: 2rem;

	:hover {
		background: #2a3642;
	}
`;

const PortfolioPageMainContainer = styled.div`
	text-align: center;
`;

const PortfolioContentContainer = styled.section`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
`;

const PortfolioHeadingH1 = styled.h1`
	font-size: 5rem;
	font-weight: 700;
	margin: 2rem 0 2rem 0;
	line-height: 5rem;
`;

const MainPortfolio = () => {
	useEffect(() => {
		getPortfolioData();
	}, []);

	const [data, setData] = useState([]);

	const getPortfolioData = async () => {
		try {
			// URL for backend node REST API endpoint
			// Comment/uncomment the code below for switching between local/online servers
			// const API = 'http://localhost:5000/api';
			const API = 'https://portfolio-2020-backend.vercel.app/api';

			const response = await fetch(API);
			let data = await response.json();
			console.log(data);

			let portfolioList = '';

			portfolioList = (
				<PortfolioPageMainContainer>
					<PortfolioHeadingH1>commercial</PortfolioHeadingH1>
					<PortfolioContentContainer>
						{data.map((list) => {
							if (list.workType === 'Commercial') {
								return (
									<div key={list.id}>
										<PortfolioWorkPod
											jobTitle={list.jobTitle}
											company={list.company}
											img={list.img}
											url={list.url}
											jobRole={list.jobRole}
											techStack={list.techStack}
										/>
									</div>
								);
							}
						})}
					</PortfolioContentContainer>
					<PortfolioHeadingH1>my playground</PortfolioHeadingH1>
					<PortfolioContentContainer>
						{data.map((list) => {
							if (list.workType === 'Personal') {
								return (
									<div key={list.id}>
										<PortfolioWorkPod
											jobTitle={list.jobTitle}
											company={list.company}
											img={list.img}
											url={list.url}
											jobRole={list.jobRole}
											techStack={list.techStack}
										/>
									</div>
								);
							}
						})}
					</PortfolioContentContainer>
					<PortfolioHeadingH1>archives</PortfolioHeadingH1>
					<PortfolioContentContainer>
						{data.map((list) => {
							if (list.workType === 'Archive') {
								return (
									<div key={list.id}>
										<PortfolioWorkPod
											jobTitle={list.jobTitle}
											company={list.company}
											img={list.img}
											url={list.url}
											jobRole={list.jobRole}
											techStack={list.techStack}
										/>
									</div>
								);
							}
						})}
					</PortfolioContentContainer>
				</PortfolioPageMainContainer>
			);
			setData(portfolioList);
		} catch (error) {
			console.log(error);
		}
	};

	const getFilterData = async (techSkill) => {
		try {
			// URL for backend node REST API endpoint
			// Comment/uncomment the code below for switching between local/online servers
			// const API = 'http://localhost:5000/api';
			const API = 'https://portfolio-2020-backend.vercel.app/api';

			const response = await fetch(API);
			let data = await response.json();
			console.log(data);

			let portfolioList = '';

			portfolioList = (
				<PortfolioPageMainContainer>
					<PortfolioHeadingH1>commercial</PortfolioHeadingH1>
					<PortfolioContentContainer>
						{data.map((list) => {
							if (list.workType === 'Commercial' && list.techStack.includes(`${techSkill}`)) {
								return (
									<div key={list.id}>
										<PortfolioWorkPod
											jobTitle={list.jobTitle}
											company={list.company}
											img={list.img}
											url={list.url}
											jobRole={list.jobRole}
											techStack={list.techStack}
										/>
									</div>
								);
							}
						})}
					</PortfolioContentContainer>
					<PortfolioHeadingH1>my playground</PortfolioHeadingH1>
					<PortfolioContentContainer>
						{data.map((list) => {
							if (list.workType === 'Personal' && list.techStack.includes(`${techSkill}`)) {
								return (
									<div key={list.id}>
										<PortfolioWorkPod
											jobTitle={list.jobTitle}
											company={list.company}
											img={list.img}
											url={list.url}
											jobRole={list.jobRole}
											techStack={list.techStack}
										/>
									</div>
								);
							}
						})}
					</PortfolioContentContainer>
					<PortfolioHeadingH1>archives</PortfolioHeadingH1>
					<PortfolioContentContainer>
						{data.map((list) => {
							if (list.workType === 'Archive' && list.techStack.includes(`${techSkill}`)) {
								return (
									<div key={list.id}>
										<PortfolioWorkPod
											jobTitle={list.jobTitle}
											company={list.company}
											img={list.img}
											url={list.url}
											jobRole={list.jobRole}
											techStack={list.techStack}
										/>
									</div>
								);
							}
						})}
					</PortfolioContentContainer>
				</PortfolioPageMainContainer>
			);
			setData(portfolioList);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Fragment>
			<MainContainer>
				<PageIntroContainer>
					<p>
						My Portfolio page covers work that i have done while working for companies. As well as some Freelance work
						and noteworthy applications that i have created on my GitHub. There is also a section with archived versions
						of my previous portfolio websites which i created in the past.
					</p>
				</PageIntroContainer>
				<PageIntroBG></PageIntroBG>
				<PageTitle>
					<PageTitleHeading>portfolio</PageTitleHeading>
				</PageTitle>
				<DiagonalBG></DiagonalBG>
				<ConnectContainer>
					<PortfolioContent>
						<SelectTechSkills>
							<AllBtn onClick={getPortfolioData}>All</AllBtn>
							<FullStackBtn onClick={() => getFilterData('Full Stack')}>Full Stack</FullStackBtn>
							<FrontEndBtn onClick={() => getFilterData('Front End')}>Front End</FrontEndBtn>
							<HTMLBtn onClick={() => getFilterData('HTML')}>HTML</HTMLBtn>
							<CSSBtn onClick={() => getFilterData('CSS')}>CSS</CSSBtn>
							<JavascriptBtn onClick={() => getFilterData('Javascript')}>Javascript</JavascriptBtn>
							<ReactBtn onClick={() => getFilterData('React')}>React</ReactBtn>
							<ReduxBtn onClick={() => getFilterData('Redux')}>Redux</ReduxBtn>
							<NodeJSBtn onClick={() => getFilterData('NodeJS')}>NodeJS</NodeJSBtn>
							<TypeScriptBtn onClick={() => getFilterData('TypeScript')}>TypeScript</TypeScriptBtn>
							<PythonBtn onClick={() => getFilterData('Python')}>Python</PythonBtn>
							<KotlinBtn onClick={() => getFilterData('Kotlin')}>Kotlin</KotlinBtn>
							<NoSQLBtn onClick={() => getFilterData('NoSQL')}>NoSQL</NoSQLBtn>
							<SQLBtn onClick={() => getFilterData('SQL')}>SQL</SQLBtn>
							{/* <GraphQLBtn onClick={() => getFilterData('GraphQL')}>GraphQL</GraphQLBtn> */}
						</SelectTechSkills>
						<div>{data}</div>
					</PortfolioContent>
				</ConnectContainer>
			</MainContainer>
		</Fragment>
	);
};

export default MainPortfolio;
