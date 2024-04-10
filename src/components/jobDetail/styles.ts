import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.separator};
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.background_b};
  justify-content: flex-start;
  align-items: center;
  transition: 0.5s;

  & img {
    max-width: 4rem;
  }

  & h2 {
    font-size: 1.1em;
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  & p {
    text-align: center;
  }
`;