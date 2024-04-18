import { Button as ButtonChakra } from "@chakra-ui/react";

import { Props } from "./types";
import { ButtonContent, Container } from "./styles";

export const Button = (props: Props) => {
  const { title, ...rest } = props;

  return (
    <Container>
      <ButtonChakra {...rest}>
        <ButtonContent>{title}</ButtonContent>
      </ButtonChakra>
    </Container>
  );
};
