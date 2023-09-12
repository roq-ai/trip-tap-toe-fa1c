import * as yup from 'yup';

export const budgetAllocationValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  description: yup.string().nullable(),
  travel_plan_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
