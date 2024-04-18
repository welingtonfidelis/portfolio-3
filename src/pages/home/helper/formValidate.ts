import * as Yup from "yup";
import i18n from "i18next";

export const formValidate = () => {
  return Yup.object().shape({
    name: Yup.string().required(i18n.t("contact.input_error_name")),
    email: Yup.string().email().required(i18n.t("contact.input_error_email")),
    message: Yup.string().required(i18n.t("contact.input_error_message")),
  });
};
