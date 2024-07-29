import { searchAPI, videoToAudio } from '../../api.utils';

export const searchSong = {
  queryKey: (songName: string) => ['search-song', songName],
  queryFn: (songName: string) => {
    return searchAPI.get(
      `?part=snippet&q=${encodeURI(songName)}&maxResults=5&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }&type=video`
    );
  },
};
export const getAudioUrl = {
  queryKey: (songId: string) => ['get-audio-url', songId],
  queryFn: (songId: string) => {
    return videoToAudio.get(songId);
  },
};
