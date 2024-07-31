import { useTheme } from "../../hooks/useThems";
import './switch-theme.css';
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const SwitchTheme = () => {

	const [theme, handleChange] = useTheme('dark');

	return (
		<div className="containerSwitch">
			<span>Change Theme </span>
			<div className="switchLine">
				<div className="sun">
					<IoMdSunny />
				</div>
				<label className="switch">
					<input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
					<span className="slider"></span>
				</label>
				<div className="moon">
					<IoMdMoon />
				</div>
			</div>
		</div>
	)
}

export default SwitchTheme;