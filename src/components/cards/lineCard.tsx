import MemoizedRenderIconFromAList from '../renderIconFromAList/renderIconFromAList';
import './lineCard.css';
import { ProjectProps } from '../../mockData/projects';

type LineCardProps = {
	project: ProjectProps,
};

const LineCard: React.FC<LineCardProps> = ({ project }) => {
	return (
		<div className='lineCardContainer'>
			<span>hola soy line card</span>
			<MemoizedRenderIconFromAList technologies={project.skill} />
		</div>
	)
}

export default LineCard;