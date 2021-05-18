import React from 'react';
import LibgdxSVG from './svgs/LibgdxSVG';
import './TechnologyIcon.scss';

const icons = {
	Git: 'logos:git-icon',
	HTML5: 'vscode-icons:file-type-html',
	CSS3: 'vscode-icons:file-type-css',
	SASS: 'logos:sass',
	Bootstrap: 'logos:bootstrap',
	Tailwind: 'vscode-icons:file-type-tailwind',
	JavaScript: 'logos:javascript',
	React: 'logos:react',
	Java: 'logos:java',
};

export default function TechnologyIcon({ technology, filter }) {
	return (
		icons[technology] ? (
			<>
				<span className={`iconify icon filter-${filter}`} data-icon={icons[technology]} />
				<span className="technology-name">{technology}</span>
			</>
		) : technology === 'libGDX' && (
			<>
				<LibgdxSVG cName={`icon filter-${filter}`} />
				<span className="technology-name">libGDX</span>
			</>
		)
	);
}
