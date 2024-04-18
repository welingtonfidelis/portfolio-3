import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`    
    html, body, #root {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
        height: 100%;
        width: 100%;
        background: ${(props) => props.theme.colors.background_a};

        .chakra-modal__content-container {
            width: 272px;

            @media (max-width: 900px) {
                width: 500px;
            }
        }
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 3px 3px #fff;
        border: solid 3px transparent;
    }

    ::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 4px 4px gray;
        border: solid 3px transparent;
        border-radius: 10px;
        background: ${(props) => props.theme.colors.primary};
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme.colors.tertiary};
    }
`;
