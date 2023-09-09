import { z } from 'zod';

const ExampleZodSchema = z.object({
  name: z.string(),
  email: z.string().email()
})

export type IExample = z.infer<typeof ExampleZodSchema>;

export { ExampleZodSchema };
