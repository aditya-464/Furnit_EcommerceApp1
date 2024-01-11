import {object, string, number} from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
