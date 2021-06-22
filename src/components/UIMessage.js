import React from 'react';
import './UIMessage.scss';

export default function UIMessage({ className, type, children }) {
	const message = () => {
		switch (type) {
			case 'successful':
				return (
					<div className={`ui-message ui-message-sucessful ${className}`}>
						<span className="iconify" data-icon="clarity:success-standard-solid" />
						<span>{children}</span>
					</div>
				);
			case 'error':
				return (
					<div className={`ui-message ui-message-error ${className}`}>
						<span className="iconify" data-icon="clarity:times-circle-solid" />
						<span>{children}</span>
					</div>
				);
			default: return <></>;
		}
	};

	return message();
}
