import { create } from "zustand";
import { State, Action } from "./types";
import { Language } from "../../enum/language";
import { ThemeColor } from "../../enum/themeColor";

const initialState: State = {
  language: Language.EN,
  themeColor: ThemeColor.LIGHT,
};

export const preferencesStore = create<State & Action>((set) => {
  return {
    ...initialState,

    updateLanguage: (data) =>
      set((state) => {
        return {
          ...state,
          language: data,
        };
      }),

    updateThemeColor: (data) =>
      set((state) => {
        return {
          ...state,
          themeColor: data,
        };
      }),
  };
});
