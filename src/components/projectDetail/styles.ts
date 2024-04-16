import styled from "styled-components";

export const Container = styled.div`
  width: 20rem;
  height: 20rem;
  transition: 0.5s;
  cursor: pointer;

  :hover {
    filter: brightness(0.9);
  }
`;

export const PreviewContent = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;

  & .slick-track {
    display: flex;
    align-items: center;
  }
`;

export const ImageContent = styled.div`
  img {
    max-width: 72vw;
    max-height: 72vh;
    margin: auto;
  }
`;

export const ActionContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  a {
    font-size: 1.5rem;
    margin-right: 1rem;
    color: ${(props) => props.theme.colors.primary};
    transition: 0.5s;

    :hover {
      color: ${(props) => props.theme.colors.tertiary};
    }
  }
`;
