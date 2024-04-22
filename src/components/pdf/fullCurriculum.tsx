import {
  Document,
  Image,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { useTranslation } from "react-i18next";
import { EducationInterface } from "../../domains/Education";
import { JobInterface } from "../../domains/Job";

export const FullCurriculumPdf = () => {
  const { t } = useTranslation();

  const colorTheme = {
    background_a: "#003147",
    background_b: "#fff",
    primary: "#333",
    secondary: "#0388c5",
    tertiary: "#6c6d6e",
  };

  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: colorTheme.background_a,
      height: "100%",
      letterSpacing: ".5px",
      lineHeight: "1.1px",
      fontSize: "10.5px",
    },
    horizontalSeparator: {
      borderBottom: "0.2px solid #fff",
      width: "100%",
    },

    sectionLeft: {
      padding: "30px",
      color: colorTheme.background_b,
      display: "flex",
      flexDirection: "column",
      maxWidth: "215px",
    },
    profileImage: {
      marginHorizontal: "auto",
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      objectFit: "cover",
    },
    profileName: {
      marginTop: 12,
      textTransform: "uppercase",
      fontSize: "12px",
      maxWidth: "200px",
      textAlign: "center",
      fontFamily: "Helvetica-Bold",
      marginHorizontal: "auto",
    },
    profileAbout: {
      margin: "18px 0",
      textTransform: "uppercase",
      maxWidth: "200px",
      textAlign: "center",
      marginHorizontal: "auto",
    },

    leftSubListContent: {
      paddingLeft: "10px",
    },

    contactContent: {},
    sectionLeftTitle: {
      fontSize: "13px",
      fontFamily: "Helvetica-Bold",
      marginTop: "22px",
      marginBottom: "11px",
      textTransform: "uppercase",
    },
    contactText: {
      marginBottom: "7px",
    },

    educationContent: {},
    educationDateText: {
      marginBottom: "6px",
    },
    educationCourseText: {
      marginBottom: "6px",
      fontFamily: "Helvetica-Bold",
    },
    educationInstitutionText: {
      marginBottom: "6px",
    },

    languageContent: {},
    languageText: {
      marginBottom: "6px",
    },

    sectionRight: {
      backgroundColor: colorTheme.background_b,
      flex: 1,
      paddingHorizontal: "16px",
    },
    sectionRightTitle: {
      fontSize: "13px",
      fontFamily: "Helvetica-Bold",
      marginTop: "22px",
      marginBottom: "11px",
      textTransform: "uppercase",
      color: colorTheme.background_a
    },
    aboutDescription: {
      color: colorTheme.primary,
      marginBottom: "12px",
    },
    serviceContent: {
      display: "flex",
      flexDirection: "row",
      marginBottom: "16px",
    },
    serviceSectionLeftContent: {
      width: "100px",
    },
    serviceSectionLeftText: {
      color: colorTheme.tertiary,
      marginBottom: "6px",
      textTransform: "uppercase",
    },
    serviceSectionRightContent: {
      flex: 1,
    },
    serviceSectionRightTitle: {
      textTransform: "uppercase",
      color: colorTheme.secondary,
      marginBottom: "10px",
    },
  });

  const Br = () => "\n";

  return (
    //   {/* TODO remove PDFViewer that when create Download mode */}
    <PDFViewer style={{ width: "100vw", height: "100vh" }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.sectionLeft}>
            <Image
              style={styles.profileImage}
              src={"/public/images/user_1.jpg"}
            />

            <Text style={styles.profileName} wrap>
              Welington Fidelis de Sousa
            </Text>

            <Text style={styles.profileAbout} wrap>
              {t("about_me.office")}
            </Text>

            <Text style={styles.horizontalSeparator} />

            <View style={styles.contactContent}>
              <Text style={styles.sectionLeftTitle}>
                {t("contact.subtitle")}
              </Text>

              <View style={styles.leftSubListContent}>
                <Text style={styles.contactText}>{t("email")}</Text>
                <Text style={styles.contactText}>{t("site")}</Text>
                <Text style={styles.contactText}>{t("linkedin")}</Text>
                <Text style={styles.contactText}>{t("github")}</Text>
                <Text style={styles.contactText}>{t("location")}</Text>
              </View>
            </View>

            <View style={styles.educationContent}>
              <Text style={styles.sectionLeftTitle}>{t("education.title")}</Text>

              <View style={styles.leftSubListContent}>
                {(
                  t("education.list", {
                    returnObjects: true,
                  }) as EducationInterface[]
                ).map((item, index) => (
                  <View key={index}>
                    <Text style={styles.educationDateText}>
                      {item.start} - {item.end}
                    </Text>
                    <Text style={styles.educationCourseText}>{item.title}</Text>
                    <Text style={styles.educationInstitutionText}>
                      {item.institution}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.languageContent}>
              <Text style={styles.sectionLeftTitle}>{t("language.title")}</Text>

              <View style={styles.leftSubListContent}>
                <Text style={styles.languageText}>
                  {t("language.portuguese")} - {t("language.portuguese_level")}
                </Text>

                <Text style={styles.languageText}>
                  {t("language.english")} - {t("language.english_level")}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.sectionRight}>
            <Text style={styles.sectionRightTitle}>{t("about_me.title")}</Text>
            <Text style={styles.aboutDescription}>
              {t("about_me.description_part_1")}
            </Text>
            <Text style={styles.aboutDescription}>
              {t("about_me.description_part_2")}
            </Text>
            <Text style={styles.aboutDescription}>
              {t("about_me.description_part_3")}
            </Text>

            <Text style={styles.sectionRightTitle}>{t("services.title")}</Text>
            {(
              t("services.list", {
                returnObjects: true,
              }) as JobInterface[]
            ).map((item, index) => (
              <View style={styles.serviceContent} key={index}>
                <View style={styles.serviceSectionLeftContent}>
                  <Text style={styles.serviceSectionLeftText}>
                    {item.start} - {item.end}
                  </Text>
                  <Text style={styles.serviceSectionLeftText}>
                    {item.company_name}
                  </Text>
                </View>

                <View style={styles.serviceSectionRightContent}>
                  <Text style={styles.serviceSectionRightTitle}>
                    {item.position}
                  </Text>
                  <Text>{t(item.description_part_1)}</Text>
                  <Text>
                    <Br />
                  </Text>

                  {item.description_part_2 && (
                    <Text>{t(item.description_part_2)}</Text>
                  )}

                  {item.description_part_3 && (
                    <Text>{t(item.description_part_3)}</Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
