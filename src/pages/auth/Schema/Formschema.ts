import { z } from 'zod';

export const formSchema = z
  .object({
    email: z
      .string()
      .min(3, {
        message: 'Email is required',
      })
      .email({
        message: 'Please enter a valid email address',
      }),
    password: z.string().min(6, {
      message: 'Password must be at least 6 character(s) long',
    }),
    confirmPassword: z.string(),
    privacyPolicy: z.boolean().refine((value) => value === true, {
      message: 'You must acknowledge the privacy policy.',
    }),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: 'Both Password did not match',
      path: ['confirmPassword'],
    }
  );

interface formTypes {
  name: 'email' | 'password' | 'confirmPassword';
  label: string;
  type: string;
  placeholder: string;
  isPassword: boolean;
}

export const formAttributes: formTypes[] = [
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'johndoe@example.com',
    isPassword: false,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '********',
    isPassword: true,
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
    placeholder: '********',
    isPassword: true,
  },
];
