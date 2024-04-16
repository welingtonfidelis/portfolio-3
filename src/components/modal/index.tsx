import {
  Button,
  Modal as ModalChakra,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

import { Props } from "./types";

export const Modal = (props: PropsWithChildren<Props>) => {
  const {
    title,
    onConfirmButtonText,
    onCloseButtonText,
    children,
    isOpen,
    onConfirmLoading,
    extraActionButtons,
    showActionButtons = true,
    onConfirm,
    onClose,
  } = props;
  const { t } = useTranslation();

  return (
    <ModalChakra onClose={onClose} isOpen={isOpen} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent maxH="90vh" maxW="90vw">
        <ModalHeader margin="auto">{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {showActionButtons && (
          <ModalFooter>
            {extraActionButtons}

            <Button onClick={onClose} colorScheme="gray">
              {onCloseButtonText || t("generic.button_cancel")}
            </Button>

            {onConfirm && (
              <Button
                onClick={onConfirm}
                colorScheme="blue"
                marginStart={"2"}
                isLoading={onConfirmLoading}
              >
                {onConfirmButtonText || t("generic.button_save")}
              </Button>
            )}
          </ModalFooter>
        )}
      </ModalContent>
    </ModalChakra>
  );
};
