export interface Props {
    title: string;
    onConfirmButtonText?: string;
    onCloseButtonText?: string;
    isOpen: boolean;
    onConfirmLoading?: boolean;
    showActionButtons?: boolean;
    extraActionButtons?: React.ReactNode;
    onConfirm?: () => void;
    onClose: () => void;
}