import {
  Document,
  Image,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

export const Curriculum = () => {
  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
      height: "100%",
    },
    sectionLeft: {
      width: "180px",
      flexGrow: 1,
    },
    sectionRight: {
      backgroundColor: "red",
      width: "80vw",
      flexGrow: 1,
    },
    profileImage: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      overflow: "hidden",
    },
  });

  return (
    <div>
      {/* TODO remove PDFViewer that when create Download mode */}
      <PDFViewer style={{width: '100vw', height: '100vh'}}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.sectionLeft}>
              <Text>Section #1</Text>
              <Image
                style={styles.profileImage}
                src={"/public/user_1.jpg"}
              />
            </View>
            <View style={styles.sectionRight}>
              <Text>Section #2</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};
