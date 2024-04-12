import { Language } from "../../enum/language";
import { ThemeColor } from "../../enum/themeColor";

export type State = {
  language: Language;
  themeColor: ThemeColor
};

export type Action = {
  updateLanguage: (data: Language) => void;
  updateThemeColor: (data: ThemeColor) => void;
};
