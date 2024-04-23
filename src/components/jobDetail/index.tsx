import { Container } from "./styles";
import { Props } from "./types";

import { useTranslation } from "react-i18next";

export const JobDetail = (props: Props) => {
  const { job } = props;
  const { t } = useTranslation();

  return (
    <Container>
      <img loading="lazy" src={job.image_url} alt={job.position + "_image"} />
      <h2>{t(job.position)}</h2>

      <span>{t(job.description)}</span>

      {job.technologies && (
        <>
          <br />
          <span>{t("technologies_contact")}:</span>
          <span>{t(job.technologies)}</span>
        </>
      )}
    </Container>
  );
};
