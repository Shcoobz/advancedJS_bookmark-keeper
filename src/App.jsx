import { useState } from 'react';
import Modal from './components/Modal';
import BookmarkList from './components/BookmarkList';
import { BookmarkProvider } from './context/BookmarkContext';

/**
 * The top-level component for the Bookmark application.
 * It sets up the context provider and renders the main structure including the modal, bookmark list, and header.
 */
function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <BookmarkProvider>
      <div className='App'>
        <header>
          <h1 onClick={() => setModalOpen(true)}>ADD BOOKMARK</h1>
        </header>
        <BookmarkList />
        <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      </div>
    </BookmarkProvider>
  );
}

export default App;
