import { PDFViewer } from "@react-pdf/renderer";
import { useTranslation } from "react-i18next";
import {
  FaEnvelopeIcon,
  FaGithubIcon,
  FaGlobeAmericasIcon,
  FaLinkedinIcon,
  FaMapMarkerIcon,
} from "./styles";
import { FullCurriculumPdf } from "../../components/pdf/fullCurriculum";

export const Curriculum = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* TODO remove PDFViewer that when create Download mode */}
      <FullCurriculumPdf />
    </div>
  );
};
