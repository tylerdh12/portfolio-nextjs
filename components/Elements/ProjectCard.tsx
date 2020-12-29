import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

interface ProjectCardProps {
	key: string;
	project: any;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	return (
		<motion.li
			key={project.title}
			className='card'
			whileHover={{
				position: 'relative',
				zIndex: 1,
				scale: 1.05,
				transition: {
					duration: 0.2
				}
			}}
		>
			<Link
				href={'/portfolio/' + project.title.toLowerCase().split(' ').join('-')}
			>
				<div className='item-container'>
					<img src={project.coverImage} alt={project.title + ' image'} />
					<div className='item-label'>{project.title}</div>
					<div className='tag-section'>
						{project.technologies.map((tech: React.ReactNode) => (
							<span className='tag'>{tech}</span>
						))}
					</div>
				</div>
			</Link>
		</motion.li>
	);
};

export default ProjectCard;
