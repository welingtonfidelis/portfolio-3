import { useTranslation } from "react-i18next";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import {
  DrawerCloseButton,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ApplicationRoutes } from "../../enum/applicationRoutes.ts";
import {
  AboutSection,
  AboutSectionContent,
  AboutSectionDescription,
  AboutSectionImage,
  BannerSection,
  Container,
  FaBarsIcon,
  JobSection,
  JobSectionContainer,
  MainContent,
  MenuLanguage,
  MenuLanguageContent,
  MenuSectionItem,
  MenuSections,
  MenuTheme,
  NavigateContent,
  ProfileContent,
  ProjectSection,
  ProjectSectionContainer,
  SectionResume,
  SectionTitle,
  SocialContent,
  TopBarContent,
} from "./styles.ts";
import { Button } from "../../components/button/index.tsx";
import { ProjectDetail } from "../../components/projectDetail/index.tsx";
import { JobDetail } from "../../components/jobDetail/index.tsx";
import { JobInterface } from "../../domains/Job.ts";
import { preferencesStore } from "../../store/preferences/index.ts";
import { Language } from "../../enum/language.ts";
import { ThemeColor } from "../../enum/themeColor.ts";
import { browserStorage } from "../../services/localStorage.ts";
import { ApplicationStorage } from "../../enum/applicationStorage.ts";
import { commonStore } from "../../store/commonStore/index.ts";
import { Drawer } from "../../components/drawer/index.tsx";
import { useGetProjectsList } from "../../services/requests/projects/index.ts";
import { Preloader } from "../../components/preloader/index.tsx";

const { CURRICULUM } = ApplicationRoutes;
const { PREFERENCE_THEME_COLOR, PREFERENCE_LANGUAGE } = ApplicationStorage;

export const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { language, updateLanguage, themeColor, updateThemeColor } =
    preferencesStore();
  const { isMobileScreen } = commonStore();
  const { setOnStorage } = browserStorage();
  const { toggleColorMode } = useColorMode();
  const {
    isOpen: isSideMenuOpen,
    onOpen: onOpenSideMenu,
    onClose: onCloseSideMenu,
  } = useDisclosure({ defaultIsOpen: !isMobileScreen });
  const { data: projects, isLoading: isLoadingProjects } = useGetProjectsList();

  const isThemeLightSelected = themeColor === ThemeColor.LIGHT;

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

  const handleChangeSection = () => {
    if (isMobileScreen) onCloseSideMenu();
  };

  const handleChangeLanguage = (lang: Language) => {
    updateLanguage(lang);

    setOnStorage(PREFERENCE_LANGUAGE, lang);
  };

  const handleChangeThemeColor = () => {
    toggleColorMode();

    const newThemeColor = isThemeLightSelected
      ? ThemeColor.DARK
      : ThemeColor.LIGHT;
    updateThemeColor(newThemeColor);

    setOnStorage(PREFERENCE_THEME_COLOR, newThemeColor);
  };

  return (
    <>
      <Container>
        <Drawer
          isOpen={isSideMenuOpen || !isMobileScreen}
          placement="left"
          onClose={() => isMobileScreen && onCloseSideMenu()}
          maxWidth={isMobileScreen ? 500 : 272}
          useDrawerOverlay={isMobileScreen}
          blockScrollOnMount={isMobileScreen}
          autoFocus={false}
        >
          <NavigateContent>
            {isMobileScreen && <DrawerCloseButton size="xs" margin={4} />}

            <MenuSections>
              <MenuSectionItem href="#banner" onClick={handleChangeSection}>
                {t("navigation_menu.home")}
              </MenuSectionItem>
              <MenuSectionItem href="#about" onClick={handleChangeSection}>
                {t("navigation_menu.about")}
              </MenuSectionItem>

              <MenuSectionItem href="#services" onClick={handleChangeSection}>
                {t("navigation_menu.services")}
              </MenuSectionItem>

              <MenuSectionItem href="#projects" onClick={handleChangeSection}>
                {t("navigation_menu.projects")}
              </MenuSectionItem>
            </MenuSections>

            <MenuLanguage className="language-switch">
              <Menu>
                <MenuButton>
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
            </MenuLanguage>

            <MenuTheme onClick={handleChangeThemeColor}>
              <IconButton
                icon={isThemeLightSelected ? <FaMoon /> : <FaSun />}
                aria-label={
                  isThemeLightSelected
                    ? t("theme_switch.dark")
                    : t("theme_switch.light")
                }
                borderRadius={50}
                size="xs"
              />
              <span>
                {isThemeLightSelected
                  ? t("theme_switch.dark")
                  : t("theme_switch.light")}
              </span>
            </MenuTheme>
          </NavigateContent>
        </Drawer>

        <MainContent>
          <TopBarContent>
            <a href="#banner">{t("top_bar_menu.title")}</a>

            {isMobileScreen && <FaBarsIcon onClick={onOpenSideMenu} />}
          </TopBarContent>

          <BannerSection id="banner">
            <ProfileContent>
              <img
                loading="lazy"
                src="/images/user_1.jpg"
                alt="User profile-1"
              />

              <h3>{t("about_me.name")}</h3>

              <p>{t("about_me.office")}</p>
              <Button
                title={t("about_me.view_cv")}
                onClick={() => navigate(CURRICULUM)}
              />
            </ProfileContent>

            <SocialContent>
              <a
                href="https://www.linkedin.com/in/welington-fidelis"
                target="_blank"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/fideliswelington/"
                target="_blank"
              >
                <FaInstagram />
              </a>

              <a href="https://github.com/welingtonfidelis" target="_blank">
                <FaGithub />
              </a>
            </SocialContent>
          </BannerSection>

          <AboutSection id="about">
            <SectionTitle>
              {t("about_me.title")}
              <div />
            </SectionTitle>

            <AboutSectionContent>
              <AboutSectionDescription>
                <span>{t("about_me.description_part_1")}</span>

                <br />
                <br />

                <span>{t("about_me.description_part_2")}</span>

                <br />
                <br />

                <span>{t("about_me.description_part_3")}</span>
              </AboutSectionDescription>

              <AboutSectionImage>
                <img src="/images/user_2.jpg" alt="User profile-2" />
              </AboutSectionImage>
            </AboutSectionContent>
          </AboutSection>

          <JobSection id="services" className="services adjust">
            <SectionTitle>
              {t("services.title")}
              <div />
            </SectionTitle>
            <SectionResume>{t("services.description")}</SectionResume>

            <JobSectionContainer>
              {(
                t("services.list", {
                  returnObjects: true,
                }) as JobInterface[]
              ).map((item, index) => (
                <JobDetail job={item} key={index} />
              ))}
            </JobSectionContainer>
          </JobSection>

          <ProjectSection id="projects">
            <SectionTitle>
              {t("projects.title")}
              <div />
            </SectionTitle>
            <SectionResume>{t("projects.description")}</SectionResume>

            <Preloader isLoading={isLoadingProjects}>
              <ProjectSectionContainer>
                {projects?.map((item, index) => (
                  <ProjectDetail project={item} key={index} />
                ))}
              </ProjectSectionContainer>
            </Preloader>
          </ProjectSection>
        </MainContent>
      </Container>
    </>
  );
};
