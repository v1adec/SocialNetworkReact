export type ValidateFieldType = (value: string) => string|undefined;

export const requiredField: ValidateFieldType = (value) => value ? undefined : "The field is required";

const maxLength = (max: number): ValidateFieldType => (value) =>
    (value && value.length) > max ? `Must be ${max} characters or less` : undefined;

export const maxLength15 = maxLength(15);