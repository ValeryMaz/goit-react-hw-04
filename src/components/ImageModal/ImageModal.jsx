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

export default function ImageModal({
  modalIsOpen,

  photo,
  onCloseModal,
}) {
  // const regularSize = photo.urls.regular;
  // const descriptionPhoto = photo.description;
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
      >
        {photo ? (
          <img
            src={photo.urls.regular}
            alt={photo.description || 'Selected photo'}
            width="100%"
          />
        ) : (
          <p>choose a photo</p>
        )}
        <button
          onClick={() => {
            onCloseModal();
          }}
        >
          Close
        </button>
      </Modal>
    </>
  );
}
