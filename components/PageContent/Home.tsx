import { motion } from 'framer-motion';
import React from 'react';

const Home = () => {
	const container = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.5,
				duration: 0.75
			}
		}
	};

	const item = {
		hidden: { opacity: 0, x: '100vw' },
		show: { opacity: 1, x: 0 }
	};

	return (
		<motion.div
			variants={container}
			initial='hidden'
			animate='show'
			id='home-content'
			className='home-page'
		>
			<motion.h1 variants={item} id='owner-name' className='home-name'>
				Tyler <span>Harper</span>
			</motion.h1>
			<motion.h2 variants={item} id='owner-label' className='home-label'>
				Full Stack Web / Native Developer
			</motion.h2>
			<motion.p variants={item} id='owner-tagline' className='home-tagline'>
				Building beautiful functional apps for the web and mobile
			</motion.p>
		</motion.div>
	);
};

export default Home;
