import { TimerActions, TimerStates } from "@features/store/models/timer";
import { create } from "zustand";
export const useTimer = create<TimerStates & TimerActions>((set) => ({
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
    set(() => ({
      ...newData,
    }));
  },
  changeTimerActivation(activate) {
    set(() => ({ timerActivated: activate }));
  },
}));
