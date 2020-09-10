export interface IFormField {
  value: string;
  isValid: boolean;
}

export function defaultFormField(): IFormField {
  return { value: "", isValid: true };
}
