import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders search page', () => {
  render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);
  expect(screen.getByText(/search books/i)).toBeInTheDocument();
});

test('renders favorites page', () => {
  render(<MemoryRouter initialEntries={['/favorites']}><App /></MemoryRouter>);
  expect(screen.getByText(/your favorite books/i)).toBeInTheDocument();
});
