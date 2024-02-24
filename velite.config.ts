import { defineCollection, defineConfig, s } from 'velite'
import { slug } from '~/lib/slug'

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s
    .object({
      title: s.string(),
      date: s.isodate(),
      lastUpdate: s.isodate().optional(),
      description: s.string(),
      category: s.string(),
      tags: s
        .string()
        .transform(data => data.split(',').map(tag => tag.trim())),
      status: s.enum(['published', 'draft', 'planned']).default('draft'),
      test: s.boolean().default(false),
      // content: s.mdx(),
      metadata: s.metadata()
    })
    .transform(data => ({
      ...data,
      slug: slug(data.title)
    }))
})

const config = defineConfig({
  collections: { posts }
})

export default config
