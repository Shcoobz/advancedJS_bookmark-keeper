import { useContext } from 'react';
import PropTypes from 'prop-types';
import { BookmarkContext } from '../context/BookmarkContext';

function Modal({ isModalOpen, setModalOpen }) {
  const { addBookmark } = useContext(BookmarkContext);

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
