import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('<Form />', () => {
	beforeEach(() => {
		render(<Form />);
	});
	it('renders a form with name, email, subject, message field and a send button', () => {
		screen.getByRole('form');
		screen.getByRole('textbox', { name: /Nombre/i });
		screen.getByRole('textbox', { name: /E-mail/i });
		screen.getByRole('textbox', { name: /Asunto/i });
		screen.getByRole('textbox', { name: /Mensaje/i });
		screen.getByRole('button', { name: /Enviar/i });
	});
	it('sends the information encoded as URI when te submit button is clicked. And shows an succes message if the response is 200', async () => {
		const nameInput = screen.getByRole('textbox', { name: /Nombre/i });
		const emailInput = screen.getByRole('textbox', { name: /E-mail/i });
		const subjectInput = screen.getByRole('textbox', { name: /Asunto/i });
		const messageInput = screen.getByRole('textbox', { name: /Mensaje/i });
		const sendButton = screen.getByRole('button', { name: /Enviar/i });

		const mockName = 'John Doe';
		const mockEmail = 'john.d@gmail.com';
		const mockSubject = 'Test sujbect';
		const mockMessage = 'Test message';
		const expectedEncode = `name=${
			encodeURIComponent(mockName)
		}&email=${
			encodeURIComponent(mockEmail)
		}&subject=${
			encodeURIComponent(mockSubject)
		}&message=${
			encodeURIComponent(mockMessage)
		}`;

		userEvent.type(nameInput, mockName);
		userEvent.type(emailInput, mockEmail);
		userEvent.type(subjectInput, mockSubject);
		userEvent.type(messageInput, mockMessage);

		const mockFetch = jest.fn(() => Promise.resolve({ status: 200 }));
		global.fetch = mockFetch;
		expect(mockFetch).not.toHaveBeenCalled();
		userEvent.click(sendButton);
		expect(mockFetch).toHaveBeenCalledTimes(1);
		expect(mockFetch.mock.calls[0][1]).toBeDefined();
		expect(mockFetch.mock.calls[0][1].body).toBeDefined();
		expect(mockFetch.mock.calls[0][1].body).toMatch(expectedEncode);
		await screen.findByText(/Enviado correctamente/i);
	});
	it('shows an custom error message if the response is 404', async () => {
		const mockFetch = jest.fn(() => Promise.resolve({ status: 404 }));
		global.fetch = mockFetch;
		const sendButton = screen.getByRole('button', { name: /Enviar/i });
		userEvent.click(sendButton);
		await screen.findByText(/Este formulario solo funciona desde Netlify/i);
	});
	it('shows an error message if an error ocurrs while sending the message', async () => {
		const mockFetch = jest.fn(() => Promise.reject());
		global.fetch = mockFetch;
		const sendButton = screen.getByRole('button', { name: /Enviar/i });
		userEvent.click(sendButton);
		await screen.findByText(/Ha habido un error/i);
	});
});
