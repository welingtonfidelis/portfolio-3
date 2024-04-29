import { FaBars } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  color: ${(props) => props.theme.colors.primary};
`;

export const NavigateContent = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${(props) => props.theme.colors.separator};
  background: ${(props) => props.theme.colors.background_b};
  padding: 2rem;
`;

export const MenuSections = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;
`;

export const MenuSectionItem = styled.a`
  margin-top: 0.6rem;
  transition: 0.5s;
  opacity: 0.7;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.5s;

  &:hover {
    opacity: 1;
  }
`;

export const MenuLanguage = styled.div`
  font-size: 0.8rem;
`;

export const MenuLanguageContent = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 1.6rem;
    margin-right: 0.5rem;
  }
`;

export const MenuTheme = styled.div`
  display: flex;
  font-size: 0.8rem;
  align-items: center;

  button {
    margin-right: 0.5rem;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background_a};
    width: 26px;
    height: 26px;
  }

  :hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const MainContent = styled.div`
  margin-left: 17rem; //relative to NavigateContent

  @media (max-width: 900px) {
    margin-left: 0;
  }
`;

export const TopBarContent = styled.div`
  position: fixed;
  height: 3.5rem;
  width: calc(100vw - 17rem); //relative to NavigateContent
  background: ${(props) => props.theme.colors.background_b};
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
    letter-spacing: 1px;
  }

  @media (max-width: 900px) {
    width: 100vw;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;

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
    transition: 0.5s;
  }
  
  :hover {
    color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const SectionTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.2rem;
  letter-spacing: 2px;

  div {
    border-top: 1px solid;
    width: 55px;
    margin: 0.2rem auto 1.5rem auto;
  }
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

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const AboutSectionDescription = styled.div`
  width: 60%;
  margin-right: 3rem;

  @media (max-width: 900px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const AboutSectionImage = styled.div`
  @media (max-width: 900px) {
    img {
      width: 100%;
      margin-top: 1rem;
    }
  }
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

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProjectSection = styled(SectionBase)``;

export const ProjectSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 2rem 0;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ContactSection = styled(SectionBase)``;

export const FormContainer = styled.div`
  flex: 1;

  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SenderInfoContainer = styled.div`
  width: 100%;
  display: flex;

  :first-child {
    margin-right: 10px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const FaBarsIcon = styled(FaBars)``;
