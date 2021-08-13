import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';

describe('<Navbar />', () => {
	beforeEach(() => {
		render(<Navbar />);
	});
	it(`renders a navigation bar that hides upwards when scrolling down and is shown again when scrolling upwards,
	also has an on-top class when it's at the top of the page`, () => {
		const navbar = screen.getByRole('navigation');
		expect(navbar.className).toMatch(/on-top/i);
		expect(navbar.className).not.toMatch(/scrolling-down/i);
		fireEvent.scroll(window, { target: { pageYOffset: 150 } });
		expect(navbar.className).not.toMatch(/on-top/i);
		expect(navbar.className).toMatch(/scrolling-down/i);
		fireEvent.scroll(window, { target: { pageYOffset: 100 } });
		expect(navbar.className).not.toMatch(/on-top/i);
		expect(navbar.className).not.toMatch(/scrolling-down/i);
	});
	it('shows a menu when the menu button is clicked and hides it when the menu button is clicked again or any link is clicked ', () => {
		const navbar = screen.getByRole('navigation');
		const menuBtn = screen.getByRole('button');
		expect(navbar.className).not.toMatch(/menu-open/i);
		userEvent.click(menuBtn);
		expect(navbar.className).toMatch(/menu-open/i);
		userEvent.click(menuBtn);
		expect(navbar.className).not.toMatch(/menu-open/i);
		const links = [
			screen.getByText(/proyectos/i),
			screen.getByText(/sobre mi/i),
			screen.getByText(/contacto/i),
		];
		links.forEach((link) => {
			menuBtn.click();
			expect(navbar.className).toMatch(/menu-open/i);
			link.click();
			expect(navbar.className).not.toMatch(/menu-open/i);
		});
	});
});
