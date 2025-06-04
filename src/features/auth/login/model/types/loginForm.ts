import {LoginFormValues} from '@src/entities/auth/model/types/Auth';
import {z, ZodType} from 'zod';

export const LoginFormSchema: ZodType<LoginFormValues> = z.object({
  email: z
    .string({message: 'Email is required field'})
    .min(1, 'Email is required field')
    .email('Invalid email format'),

  password: z
    .string({message: 'Password is required field'})
    .min(1, 'Password is required field')
    .min(8, 'Password should contain more than 8 symbols')
    .refine(val => /[A-Z]/.test(val), {
      message: 'Password must contain at least one uppercase letter',
    })
    .refine(val => /[a-z]/.test(val), {
      message: 'Password must contain at least one lowercase letter',
    })
    .refine(val => /\d/.test(val), {
      message: 'Password must contain at least one number',
    })
    .refine(val => /[\W_]/.test(val), {
      message: 'Password must contain at least one special character',
    }),
});
