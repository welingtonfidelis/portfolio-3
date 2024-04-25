import { PDFViewer } from "@react-pdf/renderer";
import { useTranslation } from "react-i18next";
import {
  AboutDescription,
  ContactContent,
  Container,
  EducationContainer,
  EducationCourseText,
  EducationDateText,
  EducationInstitutionText,
  EducationItemContent,
  FaEnvelopeIcon,
  FaGithubIcon,
  FaGlobeAmericasIcon,
  FaLinkedinIcon,
  FaMapMarkerIcon,
  HorizontalSeparator,
  LanguageContainer,
  LanguageText,
  ProfileAbout,
  ProfileImage,
  ProfileName,
  SectionLeft,
  SectionLeftTitle,
  SectionRight,
  SectionRightTitle,
  ServiceContent,
  ServiceSectionLeftContent,
  ServiceSectionLeftText,
  ServiceSectionRightContent,
  ServiceSectionRightTitle,
} from "./styles";
import { FullCurriculumPdf } from "../../components/pdf/fullCurriculum";
import { LightCurriculumPdf } from "../../components/pdf/lightCurriculum";
import { EducationInterface } from "../../domains/Education";
import { JobInterface } from "../../domains/Job";

export const Curriculum = () => {
  const { t } = useTranslation();

  return (
    /* TODO remove PDFViewer that when create Download mode */

    // <FullCurriculumPdf />

    // <LightCurriculumPdf />

    <Container>
      <SectionLeft>
        <ProfileImage>
          <img src={"/public/images/user_1.jpg"} alt="" />
        </ProfileImage>

        <ProfileName>{t("about_me.name")}</ProfileName>

        <ProfileAbout>{t("about_me.office")}</ProfileAbout>

         <HorizontalSeparator />

        <SectionLeftTitle>{t("contact.subtitle")}</SectionLeftTitle>
        <ContactContent>
          <span>{t("phone")}</span>
          <span>{t("email")}</span>
          <span>{t("site")}</span>
          <span>{t("linkedin")}</span>
          <span>{t("github")}</span>
          <span>{t("location")}</span>
        </ContactContent>

        <SectionLeftTitle>{t("education.title")}</SectionLeftTitle>
        <EducationContainer>
          {(
            t("education.list", {
              returnObjects: true,
            }) as EducationInterface[]
          ).map((item, index) => (
            <EducationItemContent key={index}>
              <EducationDateText>
                {item.start} - {item.end}
              </EducationDateText>

              <EducationCourseText>{item.title}</EducationCourseText>

              <EducationInstitutionText>
                {item.institution}
              </EducationInstitutionText>
            </EducationItemContent>
          ))}
        </EducationContainer>

        <SectionLeftTitle>{t("language.title")}</SectionLeftTitle>

        <LanguageContainer>
          <LanguageText>
            {t("language.portuguese")} - {t("language.portuguese_level")}
          </LanguageText>

          <LanguageText>
            {t("language.english")} - {t("language.english_level")}
          </LanguageText>
        </LanguageContainer>
      </SectionLeft>

      <SectionRight>
        <SectionRightTitle>{t("about_me.title")}</SectionRightTitle>
        <AboutDescription>{t("about_me.description_part_1")}</AboutDescription>
        <AboutDescription>{t("about_me.description_part_2")}</AboutDescription>
        <AboutDescription>{t("about_me.description_part_3")}</AboutDescription>

        <SectionRightTitle>{t("services.title")}</SectionRightTitle>
        {(
          t("services.list", {
            returnObjects: true,
          }) as JobInterface[]
        ).map((item, index) =>  (
          <ServiceContent key={index}>
            <ServiceSectionLeftContent>
              <ServiceSectionLeftText>
                {item.start} - {item.end}
              </ServiceSectionLeftText>
              <ServiceSectionLeftText>
                {item.company_name}
              </ServiceSectionLeftText>
            </ServiceSectionLeftContent>

            <ServiceSectionRightContent>
              <ServiceSectionRightTitle>
                {item.position}
              </ServiceSectionRightTitle>
              <span>{item.description}</span>

              {item.technologies && (
                <>
                  <br />

                  <span>{t("technologies_contact")}:</span>
                  <span>{item.technologies}</span>
                </>
              )}
            </ServiceSectionRightContent>
          </ServiceContent>
        ))}
      </SectionRight>
    </Container>
  );
};
