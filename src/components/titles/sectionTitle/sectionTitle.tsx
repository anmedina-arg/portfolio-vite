import './sectionTitle.css';

type SectionTitleProps = {
	label: string,
}

const SectionTitle = ({ label }: SectionTitleProps) => {
	return (
		<span className='sectionTitle'>{label}</span>
	)
}

export default SectionTitle