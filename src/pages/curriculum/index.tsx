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
  BackIcon,
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
  DownloadIcon,
  CvContent,
  TopBarContent,
  MenuLanguageContent,
} from "./styles";
import { FullCurriculum } from "../../components/pdf/fullCurriculum";
import { SimpleCurriculum } from "../../components/pdf/simpleCurriculum";
import { EducationInterface } from "../../domains/Education";
import { JobInterface } from "../../domains/Job";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Language } from "../../enum/language";
import { preferencesStore } from "../../store/preferences";
import { ApplicationStorage } from "../../enum/applicationStorage";
import { browserStorage } from "../../services/localStorage";

const { PREFERENCE_LANGUAGE } = ApplicationStorage;

export const Curriculum = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { language, updateLanguage } = preferencesStore();
  const { setOnStorage } = browserStorage();

  const handleBackToPortfolio = () => {
    navigate(-1);
  };

  const languageOptions = [
    {
      key: Language.EN,
      label: <span>{t("language.english")}</span>,
      image: <img src={"/images/eua.png"} alt="EUA Flag" />,
    },
    {
      key: Language.PT,
      label: <span>{t("language.portuguese")}</span>,
      image: <img src={"/images/brazil.png"} alt="Bandeira do Brasil" />,
    },
  ];

  const selectedLanguageOption = languageOptions.find(
    (lang) => lang.key === language
  );

  const handleChangeLanguage = (lang: Language) => {
    updateLanguage(lang);

    setOnStorage(PREFERENCE_LANGUAGE, lang);
  };

  return (
    <Container>
      <TopBarContent>
        <Button
          leftIcon={<BackIcon />}
          border="none"
          variant="outline"
          onClick={handleBackToPortfolio}
        >
          {t("curriculum_back_page")}
        </Button>

        <div>
          <Menu>
            <MenuButton as={Button} background="none">
              <MenuLanguageContent>
                {selectedLanguageOption?.image}
                {selectedLanguageOption?.label}
              </MenuLanguageContent>
            </MenuButton>

            <MenuList>
              {languageOptions.map((lang) => {
                return (
                  <MenuItem
                    key={lang.key}
                    onClick={() => handleChangeLanguage(lang.key)}
                  >
                    <MenuLanguageContent>
                      {lang.image}
                      {lang.label}
                    </MenuLanguageContent>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<DownloadIcon />}
              background="none"
            >
              {t("generic.button_download")}
            </MenuButton>

            <MenuList>
              <MenuItem>
                <PDFDownloadLink
                  document={<FullCurriculum />}
                  fileName="welington_fidelis_cv.pdf"
                >
                  {({ loading }) =>
                    loading ? t("generic.text_loading") : t("full_curriculum")
                  }
                </PDFDownloadLink>
              </MenuItem>
              <MenuItem>
                <PDFDownloadLink
                  document={<SimpleCurriculum />}
                  fileName="welington_fidelis_cv.pdf"
                >
                  {({ loading }) =>
                    loading ? t("generic.text_loading") : t("simple_curriculum")
                  }
                </PDFDownloadLink>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </TopBarContent>

      <CvContent>
        <SectionLeft>
          <ProfileImage>
            <img src={"/images/user_1.jpg"} alt="" />
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
          <AboutDescription>
            {t("about_me.description_part_1")}
          </AboutDescription>
          <AboutDescription>
            {t("about_me.description_part_2")}
          </AboutDescription>
          <AboutDescription>
            {t("about_me.description_part_3")}
          </AboutDescription>

          <SectionRightTitle>{t("services.title")}</SectionRightTitle>
          {(
            t("services.list", {
              returnObjects: true,
            }) as JobInterface[]
          ).map((item, index) => (
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
      </CvContent>
    </Container>
  );
};
