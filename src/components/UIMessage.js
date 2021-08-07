import React from 'react';
import Icon from './Icon';
import './UIMessage.scss';

export default function UIMessage({ className, type, children }) {
	return (
		<div className={`ui-message ui-message--${className}`}>
			<Icon type={type} imgClassName={`ui-message__${type.toLowerCase()}-icon`} />
			<p>{children({ className: 'ui-message__link' })}</p>
		</div>
	);
}
