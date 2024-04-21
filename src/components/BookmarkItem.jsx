import { useContext } from 'react';
import PropTypes from 'prop-types';
import { BookmarkContext } from '../context/BookmarkContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

/**
 * Displays a single bookmark item with an option to delete.
 * @param {string} url - The URL of the bookmark.
 * @param {string} name - The display name of the bookmark.
 */
function BookmarkItem({ url, name }) {
  const { deleteBookmark } = useContext(BookmarkContext);

  return (
    <div className='item'>
      <div className='name'>
        <img
          src={`https://s2.googleusercontent.com/s2/favicons?domain=${url}`}
          alt='Favicon'
        />
        <a href={url} target='_blank' rel='noopener noreferrer'>
          {name}
        </a>
      </div>
      <FontAwesomeIcon
        icon={faTimes}
        className='close-icon'
        onClick={() => deleteBookmark(url)}
      />
    </div>
  );
}

BookmarkItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default BookmarkItem;
