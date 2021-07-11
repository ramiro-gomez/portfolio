import React from 'react';
import Icon from './Icon';
import './UIMessage.scss';

export default function UIMessage({ className, type, children }) {
	return (
		<div className={`ui-message ui-message-${type.toLowerCase()} ${className}`}>
			<Icon type={type} />
			<p>{children}</p>
		</div>
	);
}
