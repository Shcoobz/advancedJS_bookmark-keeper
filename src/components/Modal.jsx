import { useContext } from 'react';
import PropTypes from 'prop-types';
import { BookmarkContext } from '../context/BookmarkContext';

/**
 * Represents the modal component used for adding new bookmarks.
 * It displays a form that captures a new bookmark's name and URL.
 * @param {boolean} isModalOpen - Controls the visibility of the modal.
 * @param {Function} setModalOpen - Function to set the modal's open/close state.
 */
function Modal({ isModalOpen, setModalOpen }) {
  const { addBookmark } = useContext(BookmarkContext);

  /**
   * Handles form submission to add a new bookmark and close the modal.
   * @param {Event} event - The form submission event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements['name'].value;
    const url = event.target.elements['url'].value;
    addBookmark(name, url);
    setModalOpen(false);
  };

  if (!isModalOpen) return null;

  return (
    <div className='modal-container show-modal'>
      <div className='modal'>
        <i className='fas fa-times close-icon' onClick={() => setModalOpen(false)}></i>
        <div className='modal-header'>
          <h3>Add Bookmark</h3>
        </div>
        <div className='modal-content'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label className='form-label'>Website Name</label>
              <input type='text' className='form-input' name='name' />
            </div>
            <div className='form-group'>
              <label className='form-label'>Website URL</label>
              <input type='text' className='form-input' name='url' />
            </div>
            <button type='submit'>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};

export default Modal;
