export default function ImageCard({ photo, onPhotoClick }) {
  const {
    urls: { small },
    description,
  } = photo;
  return (
    <>
      <div>
        <img
          src={small}
          alt={description}
          width="360"
          height="152"
          onClick={() => onPhotoClick(photo)}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </>
  );
}
