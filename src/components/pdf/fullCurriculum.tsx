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
import { LanguageInterface } from "../../domains/Language";
import { ContactInterface } from "../../domains/Contact";

export const FullCurriculumPdf = () => {
  const { t } = useTranslation();

  const colorTheme = {
    background_a: "#003147",
    background_b: "#fff",
    primary: "#333",
    secondary: "#03a9f4",
  };

  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: colorTheme.background_a,
      height: "100%",
      letterSpacing: ".5px",
    },
    horizontalSeparator: {
      borderBottom: "0.5px solid #fff",
      width: "100%",
      margin: "22px 0",
    },
    sectionLeft: {
      padding: "30px",
      color: colorTheme.background_b,
      display: "flex",
      flexDirection: "column",
      maxWidth: "210px",
    },
    sectionRight: {
      backgroundColor: "red",
      flex: 1,
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
      marginTop: 12,
      textTransform: "uppercase",
      fontSize: "9px",
      maxWidth: "200px",
      textAlign: "center",
      marginHorizontal: "auto",
    },

    leftSubListContent: {
      paddingLeft: "10px",
    },

    contactContent: {
      fontSize: "10px",
    },
    contactTitle: {
      fontSize: "16px",
      fontFamily: "Helvetica-Bold",
      marginBottom: "11px",
    },
    contactText: {
      marginBottom: "7px",
    },

    educationContent: {
      fontSize: "10px",
    },
    educationTitle: {
      fontSize: "13px",
      fontFamily: "Helvetica-Bold",
      marginTop: "22px",
      marginBottom: "11px",
    },
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

    languageContent: {
      fontSize: "10px",
    },
    languageTitle: {
      fontSize: "13px",
      fontFamily: "Helvetica-Bold",
      marginTop: "22px",
      marginBottom: "11px",
    },
    languageText: {
      marginBottom: "6px",
    },
  });

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
              {t("curriculum.about_me")}
            </Text>

            <Text style={styles.horizontalSeparator} />

            <View style={styles.contactContent}>
              <Text style={styles.contactTitle}>
                {t("curriculum.contact.title")}
              </Text>

              <View style={styles.leftSubListContent}>
                {(
                  t("curriculum.contact.list", {
                    returnObjects: true,
                  }) as ContactInterface[]
                ).map((item, index) => (
                  <View key={index}>
                    <Text style={styles.contactText}>{item.title}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.educationContent}>
              <Text style={styles.educationTitle}>
                {t("curriculum.education.title")}
              </Text>

              <View style={styles.leftSubListContent}>
                {(
                  t("curriculum.education.list", {
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
              <Text style={styles.languageTitle}>
                {t("curriculum.language.title")}
              </Text>

              <View style={styles.leftSubListContent}>
                {(
                  t("curriculum.language.list", {
                    returnObjects: true,
                  }) as LanguageInterface[]
                ).map((item, index) => (
                  <View key={index}>
                    <Text style={styles.languageText}>
                      {item.title} - {item.level}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          <View style={styles.sectionRight}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
