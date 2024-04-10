import styled from "styled-components";

export const Container = styled.div`
  & button {
    display: inline-block;
    padding: 10px 30px;
    background: ${(props) => props.theme.colors.secondary};
    color: #fff;
    font-weight: 400;
    letter-spacing: 1px;
    margin-top: 10px;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    border-radius: 0%;

    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.colors.tertiary};
      color: #fff;
    }
  }
`;

export const ButtonContent = styled.div`
  text-transform: uppercase;
`;
