import Typography from '../../components/Typography';
import { ISongItem } from './types';

type Props = {
  songs: ISongItem[];
  handleSongClick: (songId: string) => void;
};

function SongsList({ songs, handleSongClick }: Props) {
  if (songs.length === 0)
    return (
      <Typography variant='subheading'>
        Nothing to display right now...
      </Typography>
    );
  return songs.map((song) => (
    <div className='flex items-center justify-start gap-2'>
      <img className='w-10 h-10' src={song.snippet.thumbnails.default.url} />
      <Typography
        onClick={() => handleSongClick(song.id.videoId)}
        variant='body'
        className='font-medium text-xl cursor-pointer hover:text-blue-400 hover:underline whitespace-nowrap text-ellipsis overflow-hidden'
      >
        {song.snippet.title}
      </Typography>
    </div>
  ));
}

export default SongsList;
