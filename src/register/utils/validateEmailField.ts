import { IFormField } from "../../utils/types";

export function validateEmailField(email: IFormField) {
  email.isValid = /^[a-z0-9-._]+@[a-z0-9-._]+\.[a-z]{2,}$/gi.test(email.value);
  if (!email.isValid) {
    email.error = "Le format de l'adresse mail est invalide";
  }
}
