import { useState, useEffect } from 'react';

import './App.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { ClipLoader } from 'react-spinners';
import fetchApi from './unsplashApi';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import SearchBar from './components/SearchBar/SearchBar';
import Modal from 'react-modal';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

Modal.setAppElement('#root');

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState('');
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  // const [searchTrigger, setSearchTrigger] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (!topic) return;

    async function fetchPhotos() {
      try {
        setLoading(true);
        setError(false);
        const newPhotos = await fetchApi(topic, page);
        setPhotos(prev => (page === 1 ? newPhotos : [...prev, ...newPhotos]));
        // console.log(response);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos(topic);
  }, [topic, page]);

  const handleSearch = newTopic => {
    setTopic(newTopic);
    setPage(1);
    setPhotos([]);
  };

  const handlePhotoClick = photo => {
    if (!modalIsOpen) {
      setSelectedPhoto(photo);
      setIsOpen(true);
    }
  };

  const handleLoadPages = () => {
    setPage(prev => prev + 1);
  };

  const OnCloseModal = () => {
    setIsOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && (
        <ClipLoader
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery photos={photos} onClick={handlePhotoClick} />
      )}
      {photos.length > 0 && <LoadMoreBtn onClick={handleLoadPages} />}
      {
        <ImageModal
          modalIsOpen={modalIsOpen}
          photo={selectedPhoto}
          onCloseModal={OnCloseModal}
        />
      }
    </>
  );
}

export default App;
