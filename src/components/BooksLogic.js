// import { useState } from 'react';
import { useSelector } from 'react-redux';
import BooksForm from './BooksForm';
import Book from './Book';

const Logic = () => {
  const books = useSelector((state) => state.books);

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
          <Book
            key={book.title}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      {showBooks()}
      <BooksForm />
    </div>
  );
};

export default Logic;
