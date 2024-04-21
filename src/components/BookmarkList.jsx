import { useContext } from 'react';
import { BookmarkContext } from '../context/BookmarkContext';
import BookmarkItem from './BookmarkItem';

function BookmarkList() {
  const { bookmarks } = useContext(BookmarkContext);

  return (
    <div className='container'>
      {Object.entries(bookmarks).map(([url, { name }]) => (
        <BookmarkItem key={url} url={url} name={name} />
      ))}
    </div>
  );
}

export default BookmarkList;
