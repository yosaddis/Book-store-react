import { useState } from 'react';
import BooksForm from './BooksForm';

const Logic = () => {
  const [books, setBooks] = useState([]);

  const showBooks = () => {
    if (books.length === 0) {
      return (
        <ul>
          <li>----------No books---------- </li>
        </ul>
      );
    }
    return (
      <div>
        {books.map((book) => (
          <ul key={book.id}>
            <li>
              {' '}
              name =
              {book.name}
            </li>
            <li>
              {' '}
              author=
              {book.author}
            </li>
          </ul>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      {showBooks()}
      <BooksForm books={books} setBooks={setBooks} />
    </div>
  );
};

export default Logic;
