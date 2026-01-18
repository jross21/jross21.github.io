import { defineCollection, z } from 'astro:content';

const statSchema = z.object({
  icon: z.string(),
  value: z.string(),
  label: z.string(),
});

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    date: z.string().optional(),
    status: z.enum(['deployed', 'active', 'archived']).optional(),
    stats: z.array(statSchema).optional(),
    related: z.array(z.string()).optional(),
    summary: z.object({
      outcome: z.string(),
      context: z.string(),
      change: z.string(),
    }).optional(),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().optional(),
  }),
});

const tools = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['data', 'ai', 'automation', 'productivity']),
    verdict: z.string(),
    use_when: z.string(),
    skip_when: z.string(),
  }),
});

export const collections = {
  work,
  writing,
  tools,
};
