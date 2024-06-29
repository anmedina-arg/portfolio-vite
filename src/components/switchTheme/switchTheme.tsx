import { useTheme } from "../../hooks/useThems";
import './swit-theme.css'

const SwitchTheme = () => {

	const [theme, handleChange] = useTheme('dark');

	return (
		<div className="container-switch">
			<span>Change Theme </span>
			<label className="switch">
				<input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
				<span className="slider"></span>
			</label>
		</div>
	)
}

export default SwitchTheme;