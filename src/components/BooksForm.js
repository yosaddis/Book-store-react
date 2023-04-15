import { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

const BooksLogic = ({ books, setBooks }) => {
  const [newBook, setNewBook] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [state, setState] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newBook !== '' && newAuthor !== '') {
      const newArr = [...books];
      newArr.push({ name: newBook, author: newAuthor, id: uuid() });
      setBooks(newArr);
      setState(false);
    } else {
      setState(true);
    }
  };
  const handleTitle = (event) => {
    if (event.target.value.trim() !== '') {
      setNewBook(event.target.value.trim());
    }
  };
  const handleAuthor = (event) => {
    if (event.target.value.trim() !== '') {
      setNewAuthor(event.target.value.trim());
    }
  };
  const handleError = () => (state ? 'Please insert Book title and author ' : '');
  return (
    <div className="divForm">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Book title" onChange={handleTitle} />
        <input type="text" placeholder="author" onChange={handleAuthor} />
        <button type="submit">Add book</button>
      </form>
      <p>{handleError()}</p>
    </div>
  );
};

BooksLogic.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default BooksLogic;
