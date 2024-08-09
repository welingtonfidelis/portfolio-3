import Slider, { Settings, CustomArrowProps } from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Modal } from "../modal";
import {
  ActionContent,
  Container,
  DetailContent,
  ImageContent,
  PreviewContent,
} from "./styles";
import { Props } from "./types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaGlobeAmericas } from "react-icons/fa";

export const ProjectDetail = (props: Props) => {
  const { project } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  function SampleNextArrow(props: CustomArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
          height: "19px",
          marginRight: "1rem",
          zIndex: 99,
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: CustomArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
          height: "19px",
          marginLeft: "1rem",
          zIndex: 99,
        }}
        onClick={onClick}
      />
    );
  }

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const ExtraACtionButtons = () => (
    <ActionContent>
      <a
        title={t("projects.tooltip_github")}
        href={project.github_url}
        target="_blank"
      >
        <FaGithub />
      </a>
      {project.publication_url && (
        <a
          title={t("projects.tooltip_publication")}
          href={project.publication_url}
          target="_blank"
        >
          <FaGlobeAmericas />
        </a>
      )}
    </ActionContent>
  );

  return (
    <Container>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={project.title}
        extraActionButtons={<ExtraACtionButtons />}
        onCloseButtonText={t("generic.button_close")}
      >
        <DetailContent>
          <Slider {...settings}>
            {project.images.map((imageUrl, index) => {
              return (
                <ImageContent key={index}>
                  <LazyLoadImage
                    src={imageUrl}
                    alt={`${project.title}_image`}
                    placeholder={<img src="/images/cloud-low-quality.jpg" />}
                    effect="blur"
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = "/images/cloud.png";
                    }}
                  />
                </ImageContent>
              );
            })}
          </Slider>
        </DetailContent>
      </Modal>

      <PreviewContent
        onClick={() => setIsModalOpen(true)}
        title={project.title}
      >
        <LazyLoadImage
          src={project.images?.[0] ?? ""}
          alt={`${project.title}_image`}
          placeholder={<img src="/images/cloud-low-quality.jpg" />}
          effect="blur"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "/images/cloud.png";
          }}
        />
      </PreviewContent>
    </Container>
  );
};
