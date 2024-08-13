import { FaGithub, FaGlobeAmericas } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 20rem;
`;

export const PreviewContent = styled.div`
  width: 100%;
  height: 100%;
  transition: 0.5s;
  cursor: pointer;

  ${Container}:hover & {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const OverlayContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 2rem;
  box-sizing: border-box;

  ${Container}:hover & {
    opacity: 1;
  }
`;

export const ProjectDescriptionContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

export const ProjectTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const ProjectTechnology = styled.span`
  font-size: 1rem;
`;

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  a {
    margin-left: 0.8rem;

    :hover {
      color: ${(props) => props.theme.colors.tertiary};
    }
  }
`;

export const GithubIcon = styled(FaGithub)`
  font-size: 1.3rem;
`;

export const WebSiteIcon = styled(FaGlobeAmericas)`
  font-size: 1.3rem;
`;
