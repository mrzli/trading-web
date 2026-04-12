import type { FieldValues, FormAction, FormState } from './types';

export function formReducer<TFieldsValues extends FieldValues>(
  state: FormState<TFieldsValues>,
  action: FormAction,
): FormState<TFieldsValues> {
  switch (action.type) {
    case 'set-value': {
      return {
        ...state,
        isDirty: true,
      };
    }

    case 'reset': {
      return {
        isDirty: false,
        isSubmitting: false,
        isSubmitted: false,
        isValid: true,
        submitCount: 0,
        errors: {},
      };
    }

    case 'set-submitting': {
      return {
        ...state,
        isSubmitting: action.payload,
      };
    }

    case 'set-submitted': {
      return {
        ...state,
        isSubmitted: action.payload,
      };
    }

    case 'update-form-state': {
      const { payload } = action;

      return {
        ...state,
        ...payload,
      };
    }

    default: {
      return state;
    }
  }

  return state;
}
