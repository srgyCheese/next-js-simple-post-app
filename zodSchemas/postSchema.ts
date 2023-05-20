import { z } from "zod"

export const postSchema = z.object({
  title: z.string().min(3).max(256),
  content: z.string().min(3).max(3000),
})

export type PostSchema = z.infer<typeof postSchema>