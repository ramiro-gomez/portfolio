import React from 'react';
import LibgdxSVG from './svgs/LibgdxSVG';

export default function Icon({ type, isATechonologyIcon, filter }) {
	const iconify = {
		GitHub: 'akar-icons:github-fill',
		LinkedIn: 'akar-icons:linkedin-fill',
		Gmail: 'mdi:gmail',
		Git: 'logos:git-icon',
		HTML5: 'vscode-icons:file-type-html',
		CSS3: 'vscode-icons:file-type-css',
		SASS: 'logos:sass',
		Bootstrap: 'logos:bootstrap',
		Tailwind: 'vscode-icons:file-type-tailwind',
		JavaScript: 'logos:javascript',
		React: 'logos:react',
		Jest: 'logos-jest',
		Java: 'logos:java',
		Successful: 'clarity:success-standard-solid',
		Error: 'clarity:times-circle-solid',
	};
	if (iconify[type]) {
		return (
			<span
				className={`iconify ${isATechonologyIcon ? `icon filter-${filter}` : null}`}
				data-icon={iconify[type]}
			/>
		);
	}
	if (type === 'libGDX') {
		return <LibgdxSVG className={isATechonologyIcon ? `icon filter-${filter}` : null} />;
	}
}
