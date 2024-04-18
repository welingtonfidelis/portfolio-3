import { create } from "zustand";
import { State, Action } from "./types";

const initialState: State = {
  isMobileScreen: false,
};

export const commonStore = create<State & Action>((set) => {
  const { innerWidth } = window;
  const isMobileScreen = innerWidth <= 900;

  return {
    ...initialState,
    isMobileScreen,

    updateIsMobileScreen: (data) =>
      set((state) => {
        return {
          ...state,
          isMobileScreen: data,
        };
      }),
  };
});
