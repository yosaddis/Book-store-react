import { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../redux/books/booksSlice';

const BooksLogic = () => {
  const [newBook, setNewBook] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newBook !== '' && newAuthor !== '') {
      dispatch(addBook({
        item_id: uuid(), title: newBook, author: newAuthor, category: 'undefined',
      }));
      setState(false);
      event.target.reset();
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
  const handleError = () => (state ? 'Please insert book title and author ' : '');
  return (
    <div className="BookForm">
      <h3 className="add-book-form-title">ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit} className="form">
        <input className="input" type="text" placeholder="Book title" onChange={handleTitle} />
        <input className="input" type="text" placeholder="Author" onChange={handleAuthor} />
        <button className="form-btn" type="submit">ADD BOOK</button>
      </form>
      <p>{handleError()}</p>
    </div>
  );
};

export default BooksLogic;
