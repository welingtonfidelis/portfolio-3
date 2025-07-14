import { FaArrowLeft, FaCloudDownloadAlt } from "react-icons/fa";
import styled from "styled-components";

const colorTheme = {
  background_a: "#003147",
  background_b: "#fff",
  primary: "#333",
  secondary: "#0388c5",
  tertiary: "#6c6d6e",
  separator: "#e2e8f0",
};

export const BackIcon = styled(FaArrowLeft)``;

export const DownloadIcon = styled(FaCloudDownloadAlt)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 43rem;
  height: 100%;
`;

export const TopBarContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MenuLanguageContent = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 1.6rem;
    margin-right: 0.5rem;
  }
`;

export const CvContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: ${colorTheme.background_a};
  border: 1px solid ${colorTheme.separator};
`;

export const HorizontalSeparator = styled.div`
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
  width: 100%;
`;

export const SectionLeft = styled.div`
  padding: 1.8rem;
  color: ${colorTheme.background_b};
  display: flex;
  flex-direction: column;
  width: 19rem;

  @media (max-width: 900px) {
    padding: 0.5rem;
    width: 17rem;
  }
`;

export const ProfileImage = styled.div`
  img {
    margin: auto;
    border-radius: 50%;
    width: 13rem;
    height: 13rem;
    object-fit: cover;
  }
`;

export const ProfileName = styled.h2`
  margin-top: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
`;

export const ProfileAbout = styled.span`
  margin: 0.5rem 0 2rem 0;
  text-transform: uppercase;
  text-align: center;
`;

export const SectionLeftTitle = styled.span`
  margin-top: 2rem;
  margin-bottom: 11px;
  text-transform: uppercase;
  font-weight: 500;
  color: ${colorTheme.secondary};
`;

export const ContactContent = styled.div`
  margin-left: 0.5rem;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  line-height: 26px;
`;

export const EducationContainer = styled.div`
  margin-left: 0.5rem;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  line-height: 26px;
`;

export const EducationItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EducationDateText = styled.span`
  margin-bottom: 6px;
`;

export const EducationCourseText = styled.span`
  margin-bottom: 6px;
  font-weight: 600;
`;

export const EducationInstitutionText = styled.span`
  margin-bottom: 6px;
`;

export const HardSkillContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const HardSkillItemContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HardSkillItemTitle = styled.span`
  margin-right: 0.3rem;
`;

export const HardSkillItemDescription = styled.span`
  font-weight: 700;
`;

export const LanguageContainer = styled.div`
  margin-left: 0.5rem;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  line-height: 26px;
`;
export const LanguageText = styled.span`
  margin-bottom: 6px;
`;

export const SectionRight = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colorTheme.background_b};
  color: ${colorTheme.primary};
  flex: 1;
  padding: 0 2rem;

  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;

export const SectionRightTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: ${colorTheme.background_a};
`;

export const AboutDescription = styled.span`
  margin-bottom: 12px;
`;

export const ServiceContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
`;

export const ServiceSectionLeftContent = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  width: 8.5rem;
`;

export const ServiceSectionLeftText = styled.span`
  color: ${colorTheme.tertiary};
  margin-bottom: 6px;
  text-transform: uppercase;
`;

export const ServiceSectionRightContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ServiceSectionRightTitle = styled.span`
  text-transform: uppercase;
  color: ${colorTheme.secondary};
  margin-bottom: 10px;
`;

export const ServiceSectionTechnologies = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;
