import { FaBars } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.background_a};
`;

export const NavigateContent = styled.nav`
  position: fixed;
  width: 16rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${(props) => props.theme.colors.separator};
  padding: 2rem;
`;

export const MenuSections = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    opacity: 0.7;
    margin-top: 1rem;
    transition: 0.5s;

    &:hover {
      opacity: 1;
    }
  }
`;

export const MenuLanguage = styled.div``;

export const MenuTheme = styled.div``;

export const MainContent = styled.div`
  margin-left: 16rem; //relative to NavigateContent
`;

export const TopBarContent = styled.div`
  position: fixed;
  height: 3.5rem;
  width: calc(100vw - 16rem); //relative to NavigateContent
  background: ${(props) => props.theme.colors.background_a};
  border-bottom: 1px solid ${(props) => props.theme.colors.separator};
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: 1.5rem;
  z-index: 999;

  a {
    flex: 1;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  & img {
    width: 16rem;
    height: 16rem;
    overflow: hidden;
    border-radius: 50%;
    margin-bottom: 20px;
    object-fit: cover;
  }

  & h3 {
    font-size: 1.4em;
    color: ${(props) => props.theme.colors.primary};
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 500;
  }

  & p {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const SocialContent = styled.div`
  display: flex;

  & a {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: ${(props) => props.theme.colors.separator};
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.2em;
  }
`;

export const SectionTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin: 1.5rem 0 2.5rem;
  font-size: 1.2rem;
  letter-spacing: 2px;
`;

export const SectionResume = styled.p`
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const SectionBase = styled.section`
  min-height: 100vh;
  padding: 3.5rem 1rem 0; // 3.5rem relative to topBarContent
`;

export const BannerSection = styled(SectionBase)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutSection = styled(SectionBase)``;

export const AboutSectionContent = styled.div`
  display: flex;
`;
export const AboutSectionDescription = styled.div`
  width: 60%;
  margin-right: 3rem;
`;

export const JobSection = styled(SectionBase)``;

export const JobSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin: 2rem 0;

  :hover {
    filter: brightness(0.9);
  }
`;

export const ProjectSection = styled(SectionBase)``;

export const ProjectSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 2rem 0;
`;

export const ContactSection = styled(SectionBase)``;

export const FaBarsIcon = styled(FaBars)``;
