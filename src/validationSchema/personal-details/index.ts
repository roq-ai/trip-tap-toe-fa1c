import * as yup from 'yup';

export const personalDetailValidationSchema = yup.object().shape({
  address: yup.string().required(),
  phone_number: yup.string().required(),
  date_of_birth: yup.date().required(),
  gender: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
