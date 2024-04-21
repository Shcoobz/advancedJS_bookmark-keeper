import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || {};
    setBookmarks(storedBookmarks);
  }, []);

  const addBookmark = (name, url) => {
    const newBookmarks = { ...bookmarks, [url]: { name, url } };
    setBookmarks(newBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
  };

  const deleteBookmark = (url) => {
    const { [url]: _, ...remainingBookmarks } = bookmarks;
    setBookmarks(remainingBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(remainingBookmarks));
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, showModal, setShowModal, addBookmark, deleteBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}

BookmarkProvider.propTypes = {
  children: PropTypes.node.isRequired,
};