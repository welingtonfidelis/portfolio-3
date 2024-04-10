import { Container } from "./styles";
import { Props } from "./types";

import { Trans } from "react-i18next";

export const JobDetail = (props: Props) => {
  const { job } = props;

  return (
    <Container>
      <img loading="lazy" src={job.image_url} alt={job.position + "_image"} />
      <h2>{job.position}</h2>
      <p>
        <Trans i18nKey={job.description} />
      </p>
    </Container>
  );
};
