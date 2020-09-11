export interface IFormField {
  value: string;
  isValid: boolean;
  error?: string;
}

export interface IProfileFormFields {
  email: IFormField;
  password: IFormPasswordField;
  confirmation: IFormField;
  firstname: IFormField;
  lastname: IFormField;
}

export interface IFormPasswordField extends IFormField {
  hasLower: boolean;
  hasUpper: boolean;
  hasNumber: boolean;
  hasSymbol: boolean;
  hasValidLength: boolean;
}

export function defaultFormField(): IFormField {
  return { value: "", isValid: true };
}

export function defaultPasswordField(): IFormPasswordField {
  return {
    ...defaultFormField(),
    hasLower: false,
    hasUpper: false,
    hasNumber: false,
    hasSymbol: false,
    hasValidLength: false,
  };
}
