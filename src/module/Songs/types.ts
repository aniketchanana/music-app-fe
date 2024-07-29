export type TThumbnail = {
  url: string;
  width: number;
  height: number;
};

export type ISongItem = {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      default: TThumbnail;
      medium: TThumbnail;
      high: TThumbnail;
    };
  };
};

export interface ISearchedSongItems {
  pageInfo: {
    totalResults: 1000000;
    resultsPerPage: 12;
  };
  items: ISongItem[];
}
