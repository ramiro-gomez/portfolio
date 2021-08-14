import React from 'react';
import { render } from '@testing-library/react';
import TechnologyIcon from './TechnologyIcon';

const icon = 'Mocked icon';
jest.mock('./Icon', () => () => (<p>{icon}</p>));

describe('<TechnologyIcon />', () => {
	it('renders an icon with a text', () => {
		const name = 'GitHub';
		const container = render(<TechnologyIcon icon={name} />);
		container.getByText(name);
	});
});
