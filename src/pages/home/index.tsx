import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Formik, Form, Field, FieldProps } from "formik";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { ApplicationRoutes } from "../../enum/applicationRoutes.ts";
import { ProjectInterface } from "../../domains/Project.ts";
import {
  AboutSection,
  AboutSectionContent,
  AboutSectionDescription,
  AboutSectionImage,
  BannerSection,
  ContactSection,
  Container,
  FaBarsIcon,
  FormContainer,
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
  SenderInfoContainer,
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
import { FormProps } from "./types.ts";
import { formValidate } from "./helper/formValidate.ts";

const { CURRICULUM } = ApplicationRoutes;
const { PREFERENCE_THEME_COLOR, PREFERENCE_LANGUAGE } = ApplicationStorage;

export const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { hash: urlHash } = useLocation();
  const { language, updateLanguage, themeColor, updateThemeColor } =
    preferencesStore();
  const { isMobileScreen } = commonStore();
  console.log("isMobileScreen: ", isMobileScreen);
  const { setOnStorage } = browserStorage();
  const { toggleColorMode } = useColorMode();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(!isMobileScreen);
  const validateFormFields = formValidate();

  const isThemeLightSelected = themeColor === ThemeColor.LIGHT;

  const languageOptions = [
    {
      key: Language.EN,
      label: <span>{t("language.english")}</span>,
      image: <img src={"/public/images/eua.png"} alt="EUA Flag" />,
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

  const initialFormValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleShowNavigationMenu = () => {
    setIsSideMenuOpen((oldValue) => !oldValue);
  };

  const handleChangeSection = () => {
    if (isMobileScreen) setIsSideMenuOpen(false);
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

  const handleSendMessage = (values: FormProps) => {
    console.log("values: ", values);
  };

  //   const handleSendEmail = async (values: any) => {
  //     if (!mailLoading) {
  //       setMailLoading(true);

  //       try {
  //         const { name, email, message } = values;
  //         const subject = `Contact from portfolio - ${name}`;
  //         const treatedMessage = (message + "").replace(
  //           /(?:\r\n|\r|\n)/g,
  //           "<br>"
  //         );

  //         const { data } = await axios.post("./api/mail", {
  //           email,
  //           subject,
  //           message: treatedMessage,
  //         });

  //         if (data.ok) {
  //           toast.success(t("contact.success_send"), { autoClose: 7000 });

  //           form.resetFields();
  //         }
  //       } catch (error) {
  //         toast.error(t("contact.error_send"), {
  //           autoClose: false,
  //         });
  //       }

  //       setMailLoading(false);
  //     }
  //   };

  //   const handleEasterEgg = () => {
  //     const count = easterEgg.count + 1;

  //     switch (count) {
  //       case 1:
  //         setEasterEgg({ count, text: "Re" });
  //         break;

  //       case 2:
  //         setEasterEgg({ count, text: "Rela" });
  //         break;

  //       case 3:
  //         setEasterEgg({ count, text: "Relax" });
  //         break;

  //       default:
  //         Router.push("/easterEgg");
  //         break;
  //     }
  //   };

  return (
    <>
      <Container>
        <Drawer
          isOpen={isSideMenuOpen || !isMobileScreen}
          placement="left"
          onClose={() => isMobileScreen && handleShowNavigationMenu()}
        >
          {isMobileScreen && <DrawerOverlay />}
          
          <DrawerContent maxW={isMobileScreen ? 500 : 272}>
            <DrawerBody p={0}>
              <NavigateContent>
                {isMobileScreen && <DrawerCloseButton size="xs" margin={4} />}

                <MenuSections>
                  <MenuSectionItem
                    href="#banner"
                    onClick={handleChangeSection}
                    selected={urlHash === "#banner" || urlHash === ""}
                  >
                    {t("navigation_menu.home")}
                  </MenuSectionItem>
                  <MenuSectionItem
                    href="#about"
                    onClick={handleChangeSection}
                    selected={urlHash === "#about"}
                  >
                    {t("navigation_menu.about")}
                  </MenuSectionItem>

                  <MenuSectionItem
                    href="#services"
                    onClick={handleChangeSection}
                    selected={urlHash === "#services"}
                  >
                    {t("navigation_menu.services")}
                  </MenuSectionItem>

                  <MenuSectionItem
                    href="#projects"
                    onClick={handleChangeSection}
                    selected={urlHash === "#projects"}
                  >
                    {t("navigation_menu.projects")}
                  </MenuSectionItem>

                  <MenuSectionItem
                    href="#contact"
                    onClick={handleChangeSection}
                    selected={urlHash === "#contact"}
                  >
                    {t("navigation_menu.contact")}
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
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <MainContent>
          <TopBarContent>
            <a href="#banner">{t("top_bar_menu.title")}</a>

            {isMobileScreen && (
              <FaBarsIcon onClick={handleShowNavigationMenu} />
            )}
          </TopBarContent>

          <BannerSection id="banner">
            <ProfileContent>
              <img
                loading="lazy"
                src="/public/images/user_1.jpg"
                alt="User profile-1"
              />

              <h3>Welington Fidelis de Sousa</h3>

              <p>{t("about_me.office")}</p>
              <Button
                title={t("about_me.view_cv")}
                onClick={() => navigate(CURRICULUM)}
              />
            </ProfileContent>

            <SocialContent>
              <a
                href="https://www.linkedin.com/in/welington-fidelis-de-sousa-3944a6127"
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

              <a href="https://twitter.com/welingtonfsousa" target="_blank">
                <FaTwitter />
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
                <Trans i18nKey="about_me.description" />
              </AboutSectionDescription>

              <AboutSectionImage>
                <img src="/public/images/user_2.jpg" alt="User profile-2" />
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

            <ProjectSectionContainer>
              {(
                t("projects.list", {
                  returnObjects: true,
                }) as ProjectInterface[]
              ).map((item, index) => (
                <ProjectDetail project={item} key={index} />
              ))}
            </ProjectSectionContainer>
          </ProjectSection>

          <ContactSection id="contact" className="contact adjust">
            <SectionTitle>
              {t("contact.title")}
              <div />
            </SectionTitle>

            <SectionResume>{t("contact.description")}</SectionResume>

            <FormContainer>
              <Formik
                initialValues={initialFormValues}
                validationSchema={validateFormFields}
                onSubmit={handleSendMessage}
              >
                {({ errors, touched }) => {
                  return (
                    <Form>
                      <SenderInfoContainer>
                        <Field name="name">
                          {({ field }: FieldProps) => (
                            <FormControl
                              isInvalid={!!errors.name && touched.name}
                              mb="2"
                            >
                              <Input
                                {...field}
                                borderRadius="none"
                                placeholder={t("contact.input_name")}
                              />
                              <FormErrorMessage>{errors.name}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>

                        <Field name="email">
                          {({ field }: FieldProps) => (
                            <FormControl
                              isInvalid={!!errors.email && touched.email}
                              mb="2"
                            >
                              <Input
                                {...field}
                                borderRadius="none"
                                placeholder={t("contact.input_email")}
                              />
                              <FormErrorMessage>
                                {errors.email}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </SenderInfoContainer>

                      <Field name="message">
                        {({ field }: FieldProps) => (
                          <FormControl
                            isInvalid={!!errors.message && touched.message}
                            mb="2"
                          >
                            <Textarea
                              {...field}
                              resize="none"
                              rows={8}
                              borderRadius="none"
                              placeholder={t("contact.input_message")}
                            />
                            <FormErrorMessage>
                              {errors.message}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>

                      <Button title={t("contact.button_send")} type="submit" />
                    </Form>
                  );
                }}
              </Formik>
            </FormContainer>
            {/* <Form
            initialValues={initialFormValues}
            form={form}
            onFinish={handleSendEmail}
            className="contact-form"
          >
            <div className="contact-form">
              <div className="row">
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: t("contact.input_error_name") },
                  ]}
                >
                  <input type="text" placeholder={t("contact.input_name")} />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: t("contact.input_error_email"),
                    },
                  ]}
                >
                  <input type="text" placeholder={t("contact.input_email")} />
                </Form.Item>
              </div>
              <div className="row-2">
                <Form.Item
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: t("contact.input_error_message"),
                    },
                  ]}
                >
                  <textarea placeholder={t("contact.input_message")}></textarea>
                </Form.Item>
              </div>
              <div className="btn row-2" onClick={() => form.submit()}>
                {mailLoading ? (
                  <AiOutlineLoading className="rotate-center" />
                ) : (
                  <span>{t("contact.button_send")}</span>
                )}
              </div>
            </div>
          </Form> */}
          </ContactSection>

          {/* <div className="easter-egg" onClick={handleEasterEgg}>
          {easterEgg.text}
        </div> */}
        </MainContent>

        {/* <ToastContainer /> */}
      </Container>
    </>
  );
};
