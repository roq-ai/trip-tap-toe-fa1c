import * as yup from 'yup';

export const travelPlanValidationSchema = yup.object().shape({
  destination: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  budget: yup.number().integer().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
