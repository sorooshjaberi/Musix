import { ISong, Id, States } from "@features/store/models/store";

export const getSongById = (state: States, id: Id) =>
  state.songs.find((song) => song.id === id);

export const pickUpASong = (state: States, selectedSong: ISong) => {
  state.songs.forEach((item) => {
    item.playing = false;
    item.isUp = false;
  });
  selectedSong.isUp = true;
  state.upSong = selectedSong;
};
