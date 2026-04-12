import type { FieldValues } from './field-values';
import type { FormState } from './form-state';

export type Control<TFieldValues extends FieldValues = FieldValues> = {
  _formState: FormState<TFieldValues>;
  _updateFormState: (newState: Partial<FormState<TFieldValues>>) => void;
};
