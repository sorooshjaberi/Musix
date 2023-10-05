import { Id } from "@features/store/models/songSlice";

export type TimerStates = {
  traversed?: number;
  total?: number;
  timerActivated?: boolean;
};
export type TimerActions = {
  changeTraversedSong: (value: number) => void;
  changeTotalSong: (value: number) => void;
  changeManualTime: ({ traversed, total }: Partial<TimerStates>) => void;
  changeTimerActivation: (activate: boolean) => void;
};
export type TimerSliceType = TimerActions & TimerStates