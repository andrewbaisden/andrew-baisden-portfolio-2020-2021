import React, { Fragment } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

const HelmetPage = () => {
	return (
		<HelmetProvider context={helmetContext}>
			<Fragment>
				<Helmet>
					<meta charSet="utf-8"></meta>
					<meta
						name="keywords"
						itemprop="keywords"
						content="Full Stack Developer, Full Stack, Full-Stack Developer, Full-Stack, Front-End Developer, FrontEnd Developer, Front-End Web Developer, Web Developer, Website Development, Website Design, Freelancer, Freelancer London, Andrew Baisden, AndrewBaisden, Andrew, Baisden, Baisden Andrew, BaisdenAndrew, Developer, Designer, Front-End, Back-End, Frontend, Backend, Andrew Baisden Developer, Andrew Baisden Frontend Developer, Andrew Baisden Full Stack, Andrew Baisden Full-Stack, Developer London, Web Developer London, React Developer, React, ReactJS, React Developer London, JavaScript, JavaScript Developer, Developer JavaScript, MERN Stack, MERN, MongoDB Developer, Express Developer, Node Developer, Node.js Developer"
					></meta>
					<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"></meta>
					<meta name="msapplication-TileColor" content="#ffffff"></meta>
					<meta name="msapplication-TileImage" content="/ms-icon-144x144.png"></meta>
					<meta name="theme-color" content="#ffffff"></meta>
					<title>Full Stack Developer | Andrew Baisden | London</title>
					<link
						href="https://fonts.googleapis.com/css?family=Fira+Code:400,500|Fira+Sans:400,700&display=swap"
						rel="stylesheet"
					></link>
					<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"></link>
					<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"></link>
					<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"></link>
					<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"></link>
					<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"></link>
					<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"></link>
					<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"></link>
					<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"></link>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"></link>
					<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"></link>
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
					<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"></link>
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
					<link rel="manifest" href="/manifest.json"></link>
				</Helmet>
			</Fragment>
		</HelmetProvider>
	);
};

export default HelmetPage;
