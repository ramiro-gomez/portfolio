import React from 'react';

export default function ContactIcon({ icon }) {
	const icons = {
		GitHub: 'akar-icons:github-fill',
		LinkedIn: 'akar-icons:linkedin-fill',
		Gmail: 'mdi:gmail',
	};

	return (
		<span className="iconify" data-icon={icons[icon] ? `${icons[icon]}` : ''} />
	);
}
