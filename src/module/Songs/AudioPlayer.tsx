import { useQuery } from '@tanstack/react-query';
import Typography from '../../components/Typography';
import { getAudioUrl } from './api';

function AudioPlayer({
  songId,
  audioPlayerId,
}: {
  songId: string;
  audioPlayerId: string;
}) {
  const { data: audioUrlData, isLoading } = useQuery<
    void,
    unknown,
    { audioUrl: string }
  >({
    queryKey: getAudioUrl.queryKey(songId),
    queryFn: () => getAudioUrl.queryFn(songId),
    enabled: Boolean(songId),
  });

  return (
    <div className='h-20'>
      {isLoading ? (
        <Typography variant='subheading'>Loading...</Typography>
      ) : (
        <>
          {audioUrlData?.audioUrl && (
            <audio controls id={audioPlayerId} autoPlay muted>
              <source
                src={audioUrlData?.audioUrl}
                type='audio/webm'
                key={audioUrlData?.audioUrl}
              />
            </audio>
          )}
        </>
      )}
    </div>
  );
}

export default AudioPlayer;
