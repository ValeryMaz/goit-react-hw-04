import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
  const handleSearch = evt => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    if (topic.trim() === '') {
      toast.error('Error');
      return;
    }
    onSearch(topic);

    form.reset();
  };
  return (
    <>
      <header>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            name="topic"
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <Toaster />
    </>
  );
}
