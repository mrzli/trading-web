import type { FieldValues } from './field-values';
import type { FormState } from './form-state';

export const LIST_OF_FORM_ACTION_TYPES = [
  'set-value',
  'reset',
  'set-submitting',
  'set-submitted',
  'update-form-state',
] as const;

export type FormActionType = (typeof LIST_OF_FORM_ACTION_TYPES)[number];

export interface FormActionBase {
  readonly type: FormActionType;
  readonly payload?: unknown;
}

export interface FormActionSetValue extends FormActionBase {
  readonly type: 'set-value';
  readonly payload: FormActionPayloadSetValue;
}

export type FormActionPayloadSetValue = {
  readonly name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly value: any;
};

export interface FormActionReset extends FormActionBase {
  readonly type: 'reset';
  readonly payload?: FieldValues;
}

export interface FormActionSetSubmitting extends FormActionBase {
  readonly type: 'set-submitting';
  readonly payload: boolean;
}

export interface FormActionSetSubmitted extends FormActionBase {
  readonly type: 'set-submitted';
  readonly payload: boolean;
}

export interface FormActionUpdateFormState extends FormActionBase {
  readonly type: 'update-form-state';
  readonly payload: Partial<FormState>;
}

export type FormAction =
  | FormActionSetValue
  | FormActionReset
  | FormActionSetSubmitting
  | FormActionSetSubmitted
  | FormActionUpdateFormState;
