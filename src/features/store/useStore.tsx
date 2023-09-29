import { create } from "zustand";

import { States, Actions, Id } from "./models/store";
import { getSongById, pickUpASong } from "@features/store/utils/storeUtils";

export const useStore = create<States & Actions>((set) => ({
  songs: [],
  setSongs: (songs) => set((state) => ({ songs })),

  toggleLikeSong: (id, like = true) =>
    set((state) => {
      const selectedSong = getSongById(state, id);
      if (selectedSong) {
        selectedSong.liked = like;
      }
      return {
        songs: state.songs,
      };
    }),
  selectSong: (id) =>
    set((state) => {
      const selectedSong = getSongById(state, id);
      if (selectedSong) {
        pickUpASong(state, selectedSong);
        selectedSong.playing = true;
      }
      return {
        songs: state.songs,
      };
    }),
  pauseSong: (id) =>
    set((state) => {
      const selectedSong = getSongById(state, id);
      if (selectedSong) {
        selectedSong.playing = false;
      }
      return {
        songs: state.songs,
      };
    }),
  playSong: (id) =>
    set((state) => {
      const selectedSong = getSongById(state, id);
      if (selectedSong) {
        selectedSong.playing = true;
        if (!selectedSong.isUp) {
          pickUpASong(state, selectedSong);
        }
      }
      return {
        songs: state.songs,
      };
    }),
}));
