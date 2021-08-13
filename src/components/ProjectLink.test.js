import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectLink from './ProjectLink';

describe('<ProjectLink />', () => {
	it('renders a link with a onClick callback', () => {
		const linkText = 'Test';
		const handleClick = jest.fn();
		const container = render(<ProjectLink handleClick={handleClick}>{linkText}</ProjectLink>);
		const link = container.getByText(linkText);
		userEvent.click(link);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
