import type { FieldValues } from './field-values';

export type FormState<TFieldValues extends FieldValues = FieldValues> = {
  readonly isDirty: boolean;
  readonly isSubmitting: boolean;
  readonly isSubmitted: boolean;
  readonly isValid: boolean;
  readonly submitCount: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly errors: Record<string, any>;
};
