import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.number(),
  title: z.string().min(1),
  price: z.number(),
  description: z.string().min(1),
  category: z.string().min(1),
  image: z.string().url(),
  rating: z.object({
    rate: z.number(),
    count: z.number()
  }).optional()
});

export const ProductListSchema = z.array(ProductSchema);