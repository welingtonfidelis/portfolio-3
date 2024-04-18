import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Props } from "./types";

export const Drawer = (props: Props) => {
  const { children, useDrawerOverlay, maxWidth, ...rest } = props;

  return (
    <ChakraDrawer variant="alwaysOpen" {...rest}>
      {useDrawerOverlay && <DrawerOverlay />}

      <DrawerContent maxW={maxWidth}>
        <DrawerBody p={0}>{children}</DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
};
