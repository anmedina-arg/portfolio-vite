import { ReactElement } from "react";
import "./anchor.css";

type AnchorProps = {
	icon?: ReactElement,
	href: string,
	className: string,
	title: string
}

const Anchor = ({ icon, href, className, title }: AnchorProps) => {
	return (
		<>
			<a href={href} className={`${className} anchor`}>
				{icon}
				<span className='spanHidden'>{title}</span>
			</a>
		</>
	)
};

export default Anchor;