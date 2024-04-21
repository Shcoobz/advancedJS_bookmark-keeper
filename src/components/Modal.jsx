import { useContext, useState } from 'react';
import { BookmarkContext } from '../context/BookmarkContext';

function Modal() {
  const [websiteName, setWebsiteName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const { showModal, setShowModal, addBookmark } = useContext(BookmarkContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addBookmark(websiteName, websiteUrl);
    setWebsiteName('');
    setWebsiteUrl('');
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className='modal-container'>
      <div className='modal'>
        <i className='fas fa-times close-icon' onClick={() => setShowModal(false)}></i>
        <div className='modal-header'>
          <h3>Add Bookmark</h3>
        </div>
        <div className='modal-content'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label className='form-label'>Website Name</label>
              <input
                type='text'
                className='form-input'
                value={websiteName}
                onChange={(e) => setWebsiteName(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>Website URL</label>
              <input
                type='text'
                className='form-input'
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
              />
            </div>
            <button type='submit'>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
