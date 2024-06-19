import { ReactElement } from "react";
import "./anchor.css";

type AnchorProps = {
	icon?: ReactElement,
	href: string,
	key: string,
	className: string,
	title: string
}

const Anchor = ({ icon, href, key, className, title }: AnchorProps) => {
	return (
		<>
			<a href={href} key={key} className={`${className} anchor`}>
				{icon}
				<span className='spanHidden'>{title}</span>
			</a>
		</>
	)
};

export default Anchor;