import { ChakraProvider } from "@chakra-ui/react";
import { AppRouter } from "./AppRouter";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";

import i18n from "./config/18n";
import { light } from "./config/styles/styled-component-theme";
import { theme } from "./config/styles/chackra-ui-theme";

import "./global.styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GlobalStyles } from "./global.styles";

function App() {
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
        <ThemeProvider theme={light}>
          <GlobalStyles />
          <AppRouter />
        </ThemeProvider>
      </I18nextProvider>
    </ChakraProvider>
  );
}

export default App;
