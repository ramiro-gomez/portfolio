import React from 'react';
import {
	fireEvent,
	render, screen,
} from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('<ProjectCard />', () => {
	const title = 'Title';
	const subtitle = 'subtitle';
	const text = 'Text';
	const link = 'Link';
	const technologies = 'Technologies';
	const renderLinks = () => <p>{link}</p>;
	const renderTechnologies = () => <p>{technologies}</p>;
	beforeEach(() => {
		render(
			<ProjectCard
				title={title}
				subtitle={subtitle}
				text={text}
				renderLinks={renderLinks}
				renderTechnologies={renderTechnologies}
			/>,
		);
	});
	it('renders a card with title, subtitle, text and render props', () => {
		screen.getByText(title);
		screen.getByText(subtitle);
		screen.getByText(text);
		screen.getByText(link);
		screen.getByText(technologies);
	});
	it('prevents cursor events until the appear animation is finished', () => {
		const projectCard = screen.getByTestId('project-card');
		expect(projectCard.className).toMatch('p-events-none');
		fireEvent.transitionEnd(projectCard);
		expect(projectCard.className).not.toMatch('p-events-none');
	});
});
