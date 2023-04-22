import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ title, id, author }) => {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <div className="book-details">
        <h4 className="book-category">
          Category
        </h4>
        <h2 className="book-title">
          {title}
        </h2>
        <h6 className="book-author">
          {author}
        </h6>
        <div className="book-actions">
          <button
            type="button"
            className="book-action"
          >
            Comment
          </button>
          <div className="vertical-line" />
          <button
            type="button"
            className="book-action"
            onClick={() => {
              dispatch(removeBook(id));
            }}
          >
            Remove
          </button>
          <div className="vertical-line" />
          <button
            type="button"
            className="book-action"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="progress-container">
        <div className="progress-circular">
          <div className="circular" />
        </div>
        <div className="progress-stats">
          <p className="percent">
            75%
          </p>
          <p className="completed">
            completed
          </p>
        </div>
        <div className="progress-divider" />
        <div className="current-chapter">
          <div>
            <p className="chapter-label">
              CURRENT CHAPTER
            </p>
            <p className="chapter">
              Unknow
            </p>
          </div>
          <div>
            <button
              type="button"
              className="progress-btn"
            >
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
