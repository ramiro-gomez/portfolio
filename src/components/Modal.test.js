import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('<Modal />', () => {
	const title = 'Title';
	const content = 'Content';
	const renderContent = () => <p>{content}</p>;
	it('renders a modal with title and content', () => {
		render(<Modal title={title} renderContent={renderContent} />);
		screen.getByText(title);
		screen.getByText(content);
	});
	it('adds overflow-hidden to body and removes it when is unmounted', () => {
		const modal = render(<Modal title={title} renderContent={renderContent} />);
		expect(document.body.className).toMatch(/overflow-hidden/i);
		modal.unmount();
		expect(document.body.className).not.toMatch(/overflow-hidden/i);
	});
});
