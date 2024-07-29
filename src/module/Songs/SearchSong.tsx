import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { videoToAudio } from '../../api.utils';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Typography from '../../components/Typography';
import SongsList from './SongsList';
import { searchSong } from './api';
import { ISearchedSongItems } from './types';

function SearchSong() {
  const [songName, setSongName] = useState('');
  const [activeSong, setActiveSong] = useState<{
    audioFormatHigh: string;
    audioFormatLow: string;
  } | null>(null);

  const { data, isLoading, refetch, isFetching } = useQuery<
    void,
    unknown,
    ISearchedSongItems
  >({
    queryKey: searchSong.queryKey(songName),
    queryFn: () => searchSong.queryFn(songName),
    enabled: false,
  });
  const allSongs = useMemo(() => data?.items || [], [data?.items]);
  const handleSongClick = (songId: string) => {
    videoToAudio.get(songId).then((resp) => {
      setActiveSong(resp);
    });
  };
  return (
    <div className='flex flex-col gap-3 p-10 w-1/2'>
      {activeSong && (
        <audio controls>
          <source src={activeSong.audioFormatHigh} type='audio/webm' />
        </audio>
      )}
      <div className='flex gap-2'>
        <Input
          className='bg-transparent'
          placeholder='Search for song here'
          onChange={(e) => setSongName(e.target.value)}
          value={songName}
        />

        <Button onClick={refetch} className='w-1/4'>
          Search
        </Button>
      </div>
      {isLoading || isFetching ? (
        <Typography variant='subheading'>Loading...</Typography>
      ) : (
        <SongsList songs={allSongs} handleSongClick={handleSongClick} />
      )}
    </div>
  );
}

export default SearchSong;
