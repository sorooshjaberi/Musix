export type Id = string;
export type ISong = {
  id: Id;
  liked?: boolean;
  playing?: boolean;
  isUp?: boolean;
  title?: string;
  artist?: string;
  traversedLength?: number;
  totalLength?: number;
  imageSrc?: string;
  songSrc: string;
};
export type States = {
  songs: ISong[];
  upSong?: ISong;
};
export type Actions = {
  selectSong: (id: Id) => void;
  toggleLikeSong: (id: Id, like?: boolean) => void;
  playSong: (id: Id) => void;
  pauseSong: (id: Id) => void;
  setSongs: (songs: ISong[]) => void;
  changeTraversedSong: (value: number, songId: Id) => void;
  changeTotalSong : (value: number, songId: Id) => void;
  editSongData : (value : Partial<ISong> , songId : Id) => void;
};
