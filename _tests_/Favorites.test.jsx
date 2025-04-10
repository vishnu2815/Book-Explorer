import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import BookCard from '../components/BookCard';

const sampleBook = {
  id: 'book123',
  volumeInfo: {
    title: 'Sample Book',
    authors: ['Author Name'],
    description: 'Test description',
    imageLinks: { thumbnail: 'https://via.placeholder.com/150' },
  },
};

describe('Favorites Functionality', () => {
  test('adds and removes book from favorites', () => {
    render(
      <Provider store={store}>
        <BookCard book={sampleBook} />
      </Provider>
    );

    const addBtn = screen.getByRole('button', { name: /add to favorites/i });
    fireEvent.click(addBtn);

    const removeBtn = screen.getByRole('button', { name: /remove from favorites/i });
    fireEvent.click(removeBtn);

    expect(screen.getByRole('button', { name: /add to favorites/i })).toBeInTheDocument();
  });
});
