import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function ImageModal({ modalIsOpen, setIsOpen }) {
  if (!modalIsOpen || !modalIsOpen.urls) return null;
  return (
    <>
      <Modal
        isOpen={!!modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <img
          src={modalIsOpen.urls.regular}
          alt={modalIsOpen.alt_description || 'Selected photo'}
          width="100%"
        />
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
    </>
  );
}
