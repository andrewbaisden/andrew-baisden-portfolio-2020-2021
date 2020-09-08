import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const GlobalBtnStyle = createGlobalStyle`
.fullstack {
	width: 7rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	border: 0.1rem solid #8d0a0a;
	background: #cb0101;
	color: #ffffff;
	margin: 0.5rem;
	font-size: 1.2rem;
}
	
.frontend {
	width: 7rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	border: 0.1rem solid #0e9155;
	background: #01cb6f;
	color: #ffffff;
	margin: 0.5rem;
	font-size: 1.2rem;
}

.html {
	width: 7rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	border: 0.1rem solid #972e13;
	background: #e44d26;
	color: #ffffff;
	margin: 0.5rem;
	font-size: 1.2rem;
}
.css {
	width: 7rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	border: 0.1rem solid #0a34d9;
	background: #264de4;
	color: #ffffff;
	margin: 0.5rem;
	font-size: 1.2rem;
}

.javascript {
	width: 7rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	border: 0.1rem solid #a6960a;
	background: #f5de18;
	color: #000000;
	margin: 0.5rem;
	font-size: 1.2rem;
}

.react {
	width: 7rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	border: 0.1rem solid #1c7387;
	background: #5ed5f4;
	color: #ffffff;
	margin: 0.5rem;
	font-size: 1.2rem;
}

.redux {
	width: 7rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	border: 0.1rem solid #3d029a;
	background: #7348b7;
	color: #ffffff;
	margin: 0.5rem;
	font-size: 1.2rem;
}

.nodejs {
	width: 7rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	border: 0.1rem solid #5d7c11;
	background: #87bf01;
	color: #ffffff;
	margin: 0.5rem;
	font-size: 1.2rem;
}

.vue {
	width: 7rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	border: 0.1rem solid #126741;
	background: #41b883;
	color: #ffffff;
	margin: 0.5rem;
	font-size: 1.2rem;
}

.nosql {
	width: 7rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	border: 0.1rem solid #1f6120;
	background: #449a45;
	color: #ffffff;
	margin: 0.5rem;
	font-size: 1.2rem;
}

.sql {
	width: 7rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	border: 0.1rem solid #143b5b;
	background: #336791;
	color: #ffffff;
	margin: 0.5rem;
	font-size: 1.2rem;
}

.graphql {
	width: 7rem;
	height: 2.9rem;
	font-weight: 700;
	text-align: center;
	border-radius: 0.5rem;
	border: 0.1rem solid #6c094c;
	background: #e535ab;
	color: #ffffff;
	margin: 0.5rem;
	font-size: 1.2rem;
}

`;

const PortfolioWork = styled.div`
	-webkit-box-shadow: 0px 0px 10px 5px rgba(224, 224, 224, 1);
	-moz-box-shadow: 0px 0px 10px 5px rgba(224, 224, 224, 1);
	box-shadow: 0px 0px 10px 5px rgba(224, 224, 224, 1);
	width: 39.7rem;
	height: 48rem;
	text-align: center;
	margin: 3rem;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		width: 30rem;
		height: 50rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		width: 30rem;
		height: 50rem;
	}
`;

const JobTitleBG = styled.div`
	background: #e5e5e5;
`;

const JobTitleH1 = styled.h1`
	font-weight: 300;
	padding: 0.5rem;
`;
const JobCompany = styled.div`
	height: 8rem;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS

		height: 6rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS

		height: 6rem;
	}
`;

const JobCompanyImg = styled.img`
	width: 39.7rem;
	height: 8rem;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		width: 30rem;
		height: 6rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		width: 30rem;
		height: 6rem;
	}
`;

const JobWork = styled.div`
	background: #3c4753;
	height: 37rem;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS

		height: 40rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS

		height: 40rem;
	}
`;

const WorkTitle = styled.p`
	color: #ffffff;
	font-weight: bold;
	text-transform: uppercase;
	padding: 1rem 0 1rem 0;
`;

const WorkLink = styled.a`
	padding: 2rem;
	font-weight: 700;
	font-size: 1.4rem;

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

const WorkNoLink = styled.p`
	color: #ffffff;
	font-size: 1.4rem;
`;

const JobDescription = styled.p`
	color: #ffffff;
	padding: 1.4rem;
	height: 7rem;

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

const TechStackContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	margin: 2rem;
`;

const PortfolioWorkPod = ({ jobTitle, company, img, url, jobRole, techStack }) => {
	return (
		<Fragment>
			<GlobalBtnStyle />
			<PortfolioWork>
				<JobTitleBG>
					<JobTitleH1>{jobTitle}</JobTitleH1>
				</JobTitleBG>
				<JobCompany>
					<JobCompanyImg src={img} alt={company} />
				</JobCompany>
				<JobWork>
					<WorkTitle>Links to work i did</WorkTitle>

					{url === 'N/A' ? (
						<WorkNoLink>{url}</WorkNoLink>
					) : (
						<WorkLink href={url} target="_blank" rel="noopener noreferrer nofollow">
							{url}
						</WorkLink>
					)}

					<WorkTitle>Job Role</WorkTitle>
					<JobDescription>{jobRole}</JobDescription>
					<div>
						<WorkTitle>Tech Stack</WorkTitle>
						<TechStackContainer>
							{techStack.map((tech) => {
								const text = tech.match(/[\S\.]/gi, '');
								const textJoined = text.join('').toLowerCase();
								// console.log(textJoined);
								return (
									<div key={uuidv4()} className={textJoined}>
										{tech}
									</div>
								);
							})}
						</TechStackContainer>
					</div>
				</JobWork>
			</PortfolioWork>
		</Fragment>
	);
};

export default PortfolioWorkPod;
