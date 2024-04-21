import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const BookmarkContext = createContext();

/**
 * Provides the Bookmark context for the application, managing the state for all bookmarks and modal visibility.
 */
export function BookmarkProvider({ children }) {
  /**
   * @const {Object} bookmarks - Stores the current bookmarks as a collection of objects.
   */
  const [bookmarks, setBookmarks] = useState({});

  /**
   * @const {boolean} showModal - Controls the visibility of the modal for adding bookmarks.
   */
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    /**
     * Fetches bookmarks from local storage on initial load or sets a default bookmark if none exist.
     */
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    if (storedBookmarks && Object.keys(storedBookmarks).length > 0) {
      setBookmarks(storedBookmarks);
    } else {
      /**
       * Initializes with a default bookmark if no bookmarks are stored
       */
      const defaultBookmarks = {
        'https://shcoobz.github.io/': {
          name: 'Shcoobz Portfolio',
          url: 'https://shcoobz.github.io/',
        },
      };
      setBookmarks(defaultBookmarks);
      localStorage.setItem('bookmarks', JSON.stringify(defaultBookmarks));
    }
  }, []);

  /**
   * Adds a new bookmark to the state and local storage.
   * @param {string} name - The name of the bookmark to add.
   * @param {string} url - The URL of the bookmark to add.
   */
  const addBookmark = (name, url) => {
    const newBookmarks = { ...bookmarks, [url]: { name, url } };
    setBookmarks(newBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
  };

  /**
   * Deletes a bookmark from the state and local storage.
   * @param {string} url - The URL of the bookmark to delete.
   */
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
