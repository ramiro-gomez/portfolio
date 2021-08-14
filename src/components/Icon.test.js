import React from 'react';
import { render } from '@testing-library/react';
import Icon from './Icon';

describe('<Icon />', () => {
	it('renders a span with iconify class if the icon is in Iconify', () => {
		const { container } = render(<Icon icon="GitHub" />);
		expect(container.firstChild.className).toMatch('iconify');
	});
	it('renders a svg if the icon is libGDX', () => {
		const { container } = render(<Icon icon="libGDX" />);
		expect(container.firstChild.nodeName).toBe('svg');
	});
});
