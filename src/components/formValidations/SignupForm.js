import {object, string, number} from 'yup';

export const signupSchema = object().shape({
  name: string().required('Name is required'),
  email: string().email('Enter valid email').required('Email is required'),
  phone: number()
    .required('Phone is required')
    .test('is-valid-phone', 'Enter valid phone number', value =>
      /^\d{10}$/.test(value),
    ),
  password: string()
    .required('Password is required')
    .min(8, 'Password must have atleast 8 characters'),
});
