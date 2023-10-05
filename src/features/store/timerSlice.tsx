import {
  SongsActions,
  SongsSliceType,
  SongsStates,
} from "@features/store/models/songSlice";
import { States } from "@features/store/models/store";
import {
  TimerActions,
  TimerSliceType,
  TimerStates,
} from "@features/store/models/timerSlice";
import { StateCreator } from "zustand";

export const createTimerSlice: StateCreator<States & TimerSliceType, [], [], TimerSliceType> = (
  set,
) => ({
  timerActivated: true,
  changeTotalSong(value) {
    set(() => ({
      total: value,
    }));
  },
  changeTraversedSong(value) {
    set(() => ({
      traversed: value,
    }));
  },
  changeManualTime(newData) {
    console.log({newData})
    set(() => ({
      ...newData,
    }));
  },
  changeTimerActivation(activate) {
    set(() => ({ timerActivated: activate }));
  },
});
