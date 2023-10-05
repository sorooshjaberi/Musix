import { ISong, SongsSliceType } from "@features/store/models/songSlice";
import { States } from "@features/store/models/store";
import { getSongById } from "@features/store/utils/storeUtils";
import { StateCreator } from "zustand";

export const createSongsSlice: StateCreator<States, [], [], SongsSliceType> = (
  set,
  get,
) => ({
  songs: [],
  upSong : undefined, 
  setSongs: (songs) => set(() => ({ songs })),
  toggleLikeSong: (id, like = true) => get().editSongData({ liked: like }, id),
  selectSong: (id) =>
    set((state) => ({
      upSong: state.songs.find((s) => s.id === id),
    })),
  pauseSong: (id) => get().editSongData({ playing: false }, id),
  playSong: (id) => get().editSongData({ playing: true }, id),
  selectAndPlay: (id) => {
    get().selectSong(id);
    get().playSong(id);
  },
  editSongData: (songData, id) => {
    set((state) => {
      const selectedSong = getSongById(state, id);
      if (selectedSong) {
        Object.assign(selectedSong, songData);
      }
      return {
        songs: state.songs,
      };
    });
  },
});
