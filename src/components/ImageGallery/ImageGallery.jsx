import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ photos, onClick }) {
  return (
    <div>
      <h1>Found photos</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <ImageCard photo={photo} onPhotoClick={onClick} />
          </li>
        ))}
      </ul>
    </div>
  );
}
