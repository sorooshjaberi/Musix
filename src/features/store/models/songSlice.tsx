export type Id = string;
export type ISong = {
  id: Id;
  liked?: boolean;
  playing?: boolean;
  title?: string;
  artist?: string;
  traversedLength?: number;
  totalLength?: number;
  imageSrc?: string;
  songSrc: string;
};
export type SongsStates = {
  songs: ISong[];
  upSong?: ISong;
};
export type SongsActions = {
  selectSong: (id: Id) => void;
  setSongs: (songs: ISong[]) => void;
  toggleLikeSong: (id: Id, like?: boolean) => void;
  playSong: (id: Id) => void;
  pauseSong: (id: Id) => void;
  editSongData: (value: Partial<ISong>, songId: Id) => void;
  selectAndPlay: (id: Id) => void;
};

export type SongsSliceType = SongsActions & SongsStates;
