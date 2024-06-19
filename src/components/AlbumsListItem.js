import Button from './Button';
import { GoTrashcan } from 'react-icons/go';
import ExpandablePanel from './ExpandablePanel';
import { useRemoveAlbumMutation } from '../store';
import PhotosList from './PhotosList';

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();
  const handleDelete = () => {
    removeAlbum(album);
  };
  const header = (
    <>
      <Button
        className="mr-2"
        loading={results.isLoading}
        onClick={handleDelete}
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel header={header} key={album.id}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
};

export default AlbumsListItem;
