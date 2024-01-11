import {object, string} from 'yup';

export const loginSchema = object().shape({
  email: string().email('Enter valid email').required('Email is required'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must have atleast 8 characters'),
});
