import React from 'react';
import { render } from '@testing-library/react';
import TechnologyIcon from './TechnologyIcon';

const icon = 'Mocked icon';
jest.mock('./Icon', () => () => (<p>{icon}</p>));

describe('<TechnologyIcon />', () => {
	it('renders a icon and its name', () => {
		const name = 'GitHub';
		const container = render(<TechnologyIcon type={name} />);
		container.getByText(name);
	});
});
