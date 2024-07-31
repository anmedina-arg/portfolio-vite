import './marquee.css';
import { useEffect, useState } from 'react';
import { FRONTEND_SKIL, SkillsProps } from '../../mockData/skills';

const Marquee = () => {
	// Especifica que marqueeElements es un array de SkillsProps
	const [marqueeElements, setMarqueeElements] = useState<SkillsProps[]>([]);

	useEffect(() => {
		// Establece el número de elementos a mostrar a partir de la variable CSS
		const root = document.documentElement;
		const elementsDisplayed = parseInt(
			getComputedStyle(root).getPropertyValue('--marquee-elements-displayed')
		);

		// Clona los elementos para crear el efecto de marquee
		const clonedElements = [...FRONTEND_SKIL];
		for (let i = 0; i < elementsDisplayed; i++) {
			// Añade un sufijo único al ID del clon para evitar conflictos
			clonedElements.push({ ...FRONTEND_SKIL[i], id: `clone-${i}` });
		}
		setMarqueeElements(clonedElements);

		// Establece la variable CSS para el número total de elementos
		root.style.setProperty('--marquee-elements', clonedElements.length.toString());

	}, []); // Ejecuta solo al montar el componente

	return (
		<div className="marquee">
			<ul className="marquee-content">
				{marqueeElements.map((skill) => (
					<li key={skill.id}>{skill.icon}</li>
				))}
			</ul>
		</div>
	);
};

export default Marquee;
