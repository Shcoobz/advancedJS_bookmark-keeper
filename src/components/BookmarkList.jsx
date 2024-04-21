import { useContext } from 'react';
import { BookmarkContext } from '../context/BookmarkContext';
import BookmarkItem from './BookmarkItem';

/**
 * Renders a list of bookmark items. It fetches the list of bookmarks from the BookmarkContext.
 */
function BookmarkList() {
  const { bookmarks } = useContext(BookmarkContext);

  return (
    /**
     * Maps each bookmark to a BookmarkItem component.
     */
    <div className='container'>
      {Object.entries(bookmarks).map(([url, { name }]) => (
        <BookmarkItem key={url} url={url} name={name} />
      ))}
    </div>
  );
}

export default BookmarkList;
