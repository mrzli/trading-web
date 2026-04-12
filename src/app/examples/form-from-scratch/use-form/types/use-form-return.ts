import type { Control } from './control';
import type { FieldValues } from './field-values';
import type { FormState } from './form-state';

export type UseFormReturn<TFieldValues extends FieldValues = FieldValues> = {
  readonly control: Control<TFieldValues>;
  readonly formState: FormState<TFieldValues>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getValues: (name?: string) => any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValues: (name: string, value: any) => void;
  reset: (values?: TFieldValues) => void;
};
