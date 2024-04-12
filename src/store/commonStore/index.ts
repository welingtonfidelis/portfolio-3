import { create } from "zustand";
import { State, Action } from "./types";

const initialState: State = {
  isMobileScreen: false,
};

export const commonStore = create<State & Action>(() => {
  const { innerWidth } = window;
  const isMobileScreen = innerWidth <= 600;

  return {
    ...initialState,
    isMobileScreen,
  };
});
