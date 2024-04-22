import { Container } from "./styles";
import { Props } from "./types";

import { useTranslation } from "react-i18next";

export const JobDetail = (props: Props) => {
  const { job } = props;
  const { t } = useTranslation();

  return (
    <Container>
      <img loading="lazy" src={job.image_url} alt={job.position + "_image"} />
      <h2>{job.position}</h2>
      
      <span>{t(job.description_part_1)}</span>
      <br />

      {job.description_part_2 && (
        <>
          <span>{t(job.description_part_2)}</span>
        </>
      )}

      {job.description_part_3 && (
        <>
          <span>{t(job.description_part_3)}</span>
        </>
      )}
    </Container>
  );
};
