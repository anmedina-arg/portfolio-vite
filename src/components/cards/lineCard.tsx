import MemoizedRenderIconFromAList from '../renderIconFromAList/renderIconFromAList';
import './lineCard.css';
import { ProjectProps } from '../../mockData/projects';
import ShineButton from '../ui/buttons/shineButton';
// import Button from '../ui/buttons/Button';

type LineCardProps = {
	project: ProjectProps,
};

const LineCard: React.FC<LineCardProps> = ({ project }) => {
	return (
		<div className='lineCardContainer'>
			<span className='spanContainerLineCard'>{project.title}</span>
			<div className='iconsContainerLineCard'>
				<MemoizedRenderIconFromAList technologies={project.skill} withoutBackground />
			</div>
			<div className='divButtonContainerLineCard'>
				<ShineButton label='Github' href={project.github} />
				<ShineButton label='Ver' href={project.demo} />
			</div>
		</div>
	)
}

export default LineCard;