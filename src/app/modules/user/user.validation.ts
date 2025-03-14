import { z } from 'zod';

const userValidationSchema = z.object({
  id: z.string(),
  password: z
    .string({
      invalid_type_error: 'Password must be a string',
    })
    .max(20, { message: 'Password cannot be more than 20 characters' })
    .optional(),
});

export const UserValidation = { userValidationSchema };
