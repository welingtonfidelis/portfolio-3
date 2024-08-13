import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  Container,
  GithubIcon,
  OverlayContent,
  PreviewContent,
  ProjectDescriptionContent,
  ProjectLinks,
  ProjectTechnology,
  ProjectTitle,
  WebSiteIcon,
} from "./styles";

import { Props } from "./types";
import { useTranslation } from "react-i18next";
import { Preloader } from "../preloader";

export const ProjectDetail = (props: Props) => {
  const { project } = props;
  const { t } = useTranslation();

  return (
    <Container>
      <PreviewContent>
        <LazyLoadImage
          src={project.images?.[0] ?? ""}
          alt={`${project.title}_image`}
          placeholder={<Preloader isLoading />}
          effect="blur"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "/images/cloud.png";
          }}
        />
      </PreviewContent>

      <OverlayContent>
        <ProjectDescriptionContent>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectTechnology>{project.technology}</ProjectTechnology>
        </ProjectDescriptionContent>

        <ProjectLinks>
          <a
            title={t("projects.tooltip_github")}
            href={project.github_url}
            target="_blank"
          >
            <GithubIcon />
          </a>
          {project.publication_url && (
            <a
              title={t("projects.tooltip_publication")}
              href={project.publication_url}
              target="_blank"
            >
              <WebSiteIcon />
            </a>
          )}
        </ProjectLinks>
      </OverlayContent>
    </Container>
  );
};
