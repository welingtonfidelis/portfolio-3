import { Button as ButtonChakra } from "@chakra-ui/react";

import { Props } from "./types";
import { ButtonContent, Container } from "./styles";

export const Button = (props: Props) => {
  const { title, onClick } = props;

  return (
    <Container>
      <ButtonChakra onClick={onClick}>
        <ButtonContent>{title}</ButtonContent>
      </ButtonChakra>
    </Container>
  );
};
