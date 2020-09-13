import { IFormField } from "../../utils/types";

export function validateNameField(field: IFormField) {
  field.isValid = /^[a-z- ]{1,20}$/i.test(field.value);
  if (!field.isValid) {
    field.error = "Le nom doit faire entre 1 et 20 caractères";
  } else {
    delete field.error;
  }
}
