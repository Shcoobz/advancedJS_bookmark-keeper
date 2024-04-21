import { useState } from 'react';
import Modal from './components/Modal';
import BookmarkList from './components/BookmarkList';
import { BookmarkProvider } from './context/BookmarkContext';
import './css/App.css';

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
