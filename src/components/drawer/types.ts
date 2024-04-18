import { DrawerProps } from "@chakra-ui/react";

export interface Props extends DrawerProps {
    useDrawerOverlay?: boolean;
    maxWidth?: number;
}