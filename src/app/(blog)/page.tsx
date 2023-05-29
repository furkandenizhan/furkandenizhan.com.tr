import React from 'react'
import type { Metadata } from 'next'

import { allPosts } from 'contentlayer/generated'
import { getSortedPosts } from '@/shared/lib/getSortedPosts'

import { PostList } from '@/shared/components/post-list'

export const metadata: Metadata = {
  title: 'My Knowledge | mfg-b',
  description:
    'List of my knowledge, reflections, notes and likes about all kind of things.'
}

export default function Page() {
  const posts = getSortedPosts(allPosts)

  return (
    <div className="blog-content-w m-auto">
      <PostList posts={posts} separateByYear />
    </div>
  )
}
