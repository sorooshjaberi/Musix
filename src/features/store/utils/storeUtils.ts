import { ISong, Id } from "@features/store/models/songSlice";
import { States } from "@features/store/models/store";

export const getSongById = (state: States, id: Id) =>
  state.songs.find((song) => song.id === id);

