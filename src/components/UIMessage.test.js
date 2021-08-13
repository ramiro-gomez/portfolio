import React from 'react';
import { render } from '@testing-library/react';
import UIMessage from './UIMessage';

const icon = 'Mocked icon';
jest.mock('./Icon', () => () => (<p>{icon}</p>));

describe('<UIMessage />', () => {
	it('renders a message and icon', () => {
		const message = 'Testing message';
		const container = render(<UIMessage type="GitHub">{() => message}</UIMessage>);
		container.getByText(message);
		container.getByText(icon);
	});
});
