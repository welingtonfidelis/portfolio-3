import { ChakraProvider } from "@chakra-ui/react";
import { AppRouter } from "./AppRouter";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";

import i18n from "./config/18n";
import { light, dark } from "./config/styles/styled-component-theme";
import { theme } from "./config/styles/chackra-ui-theme";

import "./global.styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GlobalStyles } from "./global.styles";
import { preferencesStore } from "./store/preferences";
import { ThemeColor } from "./enum/themeColor";
import { browserStorage } from "./services/localStorage";
import { ApplicationStorage } from "./enum/applicationStorage";
import { useEffect } from "react";
import { commonStore } from "./store/commonStore";

const { PREFERENCE_THEME_COLOR, PREFERENCE_LANGUAGE } = ApplicationStorage;

function App() {
  const { language, themeColor, updateThemeColor, updateLanguage } =
    preferencesStore();
  const { getFromStorage } = browserStorage();
  const { updateIsMobileScreen } = commonStore();

  const themeColorOnStorage = getFromStorage(PREFERENCE_THEME_COLOR);
  const languageOnStorage = getFromStorage(PREFERENCE_LANGUAGE);

  const isThemeLightSelected = themeColor === ThemeColor.LIGHT;

  useEffect(() => {
    if (themeColorOnStorage) updateThemeColor(themeColorOnStorage);

    if (languageOnStorage) updateLanguage(languageOnStorage);
  }, [
    languageOnStorage,
    themeColorOnStorage,
    updateLanguage,
    updateThemeColor,
  ]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    const handleResize = () => {
      updateIsMobileScreen(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateIsMobileScreen]);

  return (
    <ChakraProvider
      theme={theme}
      toastOptions={{
        defaultOptions: {
          position: "top-right",
          isClosable: true,
          duration: 5000,
          status: "success",
          containerStyle: { maxWidth: "300px" },
        },
      }}
    >
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={isThemeLightSelected ? light : dark}>
          <GlobalStyles />
          <AppRouter />
        </ThemeProvider>
      </I18nextProvider>
    </ChakraProvider>
  );
}

export default App;
