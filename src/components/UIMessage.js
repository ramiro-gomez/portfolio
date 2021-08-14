import React from 'react';
import Icon from './Icon';
import './UIMessage.scss';

export default function UIMessage({ type, currentAnim, children }) {
	return (
		<div className={`ui-message ui-message--${currentAnim}`}>
			<Icon icon={type} iconClassName={`ui-message__${type.toLowerCase()}-icon`} />
			{children({
				textClassName: 'ui-message__text',
				linkClassName: 'ui-message__link',
			})}
		</div>
	);
}
