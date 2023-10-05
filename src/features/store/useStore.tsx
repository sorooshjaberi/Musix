import { ISong } from "@features/store/models/songSlice";
import { States } from "@features/store/models/store";
import { createSongsSlice } from "@features/store/songsSlice";
import { createTimerSlice } from "@features/store/timerSlice";
import { devtools } from "zustand/middleware";
import { create } from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools';

let store = create<States>()((...a) => ({
  ...createSongsSlice(...a),
  // ...createTimerSlice(...a),
}));


if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', store);
}

export const useStore = store;
