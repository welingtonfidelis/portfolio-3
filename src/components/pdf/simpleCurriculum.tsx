import {
  Document,
  Page,
  // PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { useTranslation } from "react-i18next";
import { EducationInterface } from "../../domains/Education";
import { JobInterface } from "../../domains/Job";
import { HardSkillInterface } from "../../domains/HardSkills";

export const SimpleCurriculum = () => {
  const { t } = useTranslation();

  const colorTheme = {
    primary: "#003147",
    secondary: "#054c6d",
    background_a: "#fff",
    tertiary: "#6c6d6e",
  };

  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: colorTheme.background_a,
      height: "100%",
      letterSpacing: ".5px",
      lineHeight: "1.3px",
      fontSize: "10px",
      padding: "32px",
    },
    profileName: {
      textTransform: "uppercase",
      fontSize: "16px",
      fontFamily: "Helvetica-Bold",
      marginBottom: "12px",
      color: colorTheme.primary,
    },
    contactInfo: {
      fontSize: "9px",
      color: colorTheme.secondary,
    },
    sectionTitle: {
      fontSize: "12px",
      fontFamily: "Helvetica-Bold",
      marginTop: "14px",
      marginBottom: "6px",
      color: colorTheme.primary,
    },

    serviceContent: {
      display: "flex",
      flexDirection: "column",
    },
    serviceDateText: {
      fontSize: "9px",
      color: colorTheme.secondary,
    },
    servicePositionText: {
      marginBottom: "8px",
      fontSize: "9px",
    },
    hardSkillItemContent: {
      display: "flex",
      flexDirection: "row",
    },
  });

  const Br = () => "\n";

  return (
    // <PDFViewer style={{ width: "100vw", height: "100vh" }}>
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.profileName}>{t("about_me.name")}</Text>
        <Text style={styles.contactInfo}>
          {t("phone")} | {t("email")} | {t("site")} | {t("linkedin")} |{" "}
          {t("location")}
        </Text>

        <Text style={styles.sectionTitle}>{t("objective.title")}</Text>
        <Text>{t("objective.description")}</Text>

        <Text style={styles.sectionTitle}>{t("services.title")}</Text>
        {(
          t("services.list", {
            returnObjects: true,
          }) as JobInterface[]
        ).map((item, index) => (
          <View style={styles.serviceContent} key={index}>
            <Text style={styles.serviceDateText}>
              {item.start} - {item.end}
            </Text>
            <Text style={styles.servicePositionText}>
              {item.position} | {item.company_name}
            </Text>

            <Text>{item.description}</Text>

            {item.technologies && (
              <>
                <Text>
                  <Br />
                </Text>

                <Text>{t(item.technologies)}</Text>
              </>
            )}
            <Text>
              <Br />
            </Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>{t("education.title")}</Text>
        {(
          t("education.list", {
            returnObjects: true,
          }) as EducationInterface[]
        ).map((item, index) => (
          <View key={index}>
            <Text>
              {item.title} | {item.start} - {item.end}
            </Text>
            <Text>{item.institution}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>{t("language.title")}</Text>
        <Text>
          - {t("language.portuguese")}: {t("language.portuguese_level")}
        </Text>

        <Text>
          - {t("language.english")}: {t("language.english_level")}
        </Text>

        <Text style={styles.sectionTitle}>{t("hard_skills.title")}</Text>
        {(
          t("hard_skills.list", {
            returnObjects: true,
          }) as HardSkillInterface[]
        ).map((item, index) => (
          <View style={styles.hardSkillItemContent} key={index}>
            <Text>
              {item.title}: {t(item.description)}
            </Text>
          </View>
        ))}
      </Page>
    </Document>
    // </PDFViewer>
  );
};
