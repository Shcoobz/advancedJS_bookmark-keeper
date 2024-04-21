import { useContext } from 'react';
import PropTypes from 'prop-types';
import { BookmarkContext } from '../context/BookmarkContext';

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
      <i className='fas fa-times close-icon' onClick={() => deleteBookmark(url)}></i>
    </div>
  );
}

BookmarkItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default BookmarkItem;
