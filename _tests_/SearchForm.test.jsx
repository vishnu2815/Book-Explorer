import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from '../components/SearchForm';

describe('SearchForm', () => {
  test('shows validation message if all fields are empty', () => {
    render(<SearchForm onSearch={jest.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: /search/i }));
    expect(screen.getByText(/please enter at least one search field/i)).toBeInTheDocument();
  });

  test('calls onSearch with values', () => {
    const onSearch = jest.fn();
    render(<SearchForm onSearch={onSearch} />);
    fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'React' } });
    fireEvent.click(screen.getByRole('button', { name: /search/i }));
    expect(onSearch).toHaveBeenCalledWith({ title: 'React', author: '', genre: '' });
  });
});
