import React, { useState } from 'react';
import './tabs.css';

type TabProps = {
	label: string;
	component: React.ReactNode;
};

export const Tab: React.FC<TabProps> = () => {
	// El componente Tab en sí no renderiza nada por sí solo
	return null;
};

type TabsProps = {
	children: React.ReactNode;
	className?: string;
};

const Tabs: React.FC<TabsProps> = ({ children, className = '' }) => {
	const [activeTab, setActiveTab] = useState<number>(0);

	const handleTab = (tabIndex: number) => {
		setActiveTab(tabIndex);
	};

	const childrenArray = React.Children.toArray(children) as React.ReactElement<TabProps>[];

	return (
		<div className={`tabs-container ${className}`}>
			<div className="tabs" role="tablist">
				{childrenArray.map((child, index) => {
					const { label } = child.props;
					return (
						<button
							key={index}
							className={`tab ${activeTab === index ? 'activeTab' : ''}`}
							onClick={() => handleTab(index)}
							role="tab"
							aria-selected={activeTab === index}
							aria-controls={`tabpanel-${index}`}
						>
							{label}
						</button>
					);
				})}
			</div>
			<div
				id={`tabpanel-${activeTab}`}
				className="tab-content"
				role="tabpanel"
				aria-labelledby={`tab-${activeTab}`}
			>
				{childrenArray[activeTab].props.component}
			</div>
		</div>
	);
};

export default Tabs;
