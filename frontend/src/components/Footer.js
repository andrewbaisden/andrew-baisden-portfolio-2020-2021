import React, { Fragment } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const DevCommunityHeading = styled.h1`
	font-size: 6rem;
	font-weight: 700;
	line-height: 6rem;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		font-size: 5rem;
		line-height: 5rem;
		text-align: center;
		margin-top: 2rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		font-size: 5rem;
		line-height: 5rem;
		text-align: center;
		margin-top: 2rem;
	}
`;

const FooterContainer = styled.footer`
	position: fixed;
	/* top: ${(props) => props.topPosition || '260rem'}; */
	display: flex;
	flex-flow: row wrap;
	z-index: -1;
`;

const FooterLogoContainer = styled.div`
	position: absolute;
	z-index: 1;
	width: 60.4rem;
	height: 95.8rem;
	background: url('/assets/img/footer_content_left_bg.svg') no-repeat;

	/* 
  ##Device = Desktops
  ##Screen = 1587px to higher resolution desktops
*/

	@media (min-width: 766px) and (max-width: 1587px) {
		//CSS
		display: none;
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

const FooterDevCommunityContainer = styled.div`
	padding: 10rem;
	position: absolute;
	z-index: 0;
	width: 100%;
	height: 83.1rem;
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-end;
	/* background: #ffffff; */

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		padding: 0;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		padding: 0;
	}
`;

const ImgLogo = styled.img`
	height: 31.6rem;
	cursor: pointer;
	padding: 3rem;
`;

const Footer = (props) => {
	return (
		<Fragment>
			<FooterContainer topPosition={props.topPosition}>
				<FooterLogoContainer>
					<Link href="/">
						<ImgLogo src="/assets/img/logo_white.svg" alt="Andrew Baisden Logo" />
					</Link>
				</FooterLogoContainer>
				<FooterDevCommunityContainer>
					{/* <div>
						<DevCommunityHeading>developer community</DevCommunityHeading>
					</div> */}
				</FooterDevCommunityContainer>
			</FooterContainer>
		</Fragment>
	);
};

export default Footer;
