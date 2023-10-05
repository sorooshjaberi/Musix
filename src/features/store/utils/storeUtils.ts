import { ISong, Id, States } from "@features/store/models/songSlice";

export const getSongById = (state: States, id: Id) =>
  state.songs.find((song) => song.id === id);

