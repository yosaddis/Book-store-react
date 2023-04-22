import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BooksForm from './BooksForm';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

const Logic = () => {
  const dispatch = useDispatch();
  const { books, counter } = useSelector((state) => state.books);

  useEffect(
    () => {
      dispatch(fetchBooks());
    }, [dispatch, counter],
  );

  const showBooks = () => {
    if (books.length === 0) {
      return (
        <ul>
          <li>----------No books---------- </li>
        </ul>
      );
    }
    return (
      <div className="booksList">
        {Object.keys(books).map((book) => (
          <Book
            key={book}
            id={book}
            title={books[book][0].title}
            author={books[book][0].author}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      {showBooks()}
      <div className="horizontal-divider" />
      <BooksForm />
    </div>
  );
};

export default Logic;
