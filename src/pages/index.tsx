import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { KnowledgeLink } from '../components/KnowledgeLink'

import { allPosts, Post } from 'contentlayer/generated'

interface Props {
  avatarUrl: string
  posts: Post[]
}

const Home: React.FC<Props> = ({ avatarUrl, posts }) => {
  return (
    <div>
      <Head>
        <title>Knowledge</title>
      </Head>

      <Container>
        <Header imageUrl={avatarUrl} title="Knowledge" />
        <main>
          {posts.map((post, key) => {
            return (
              <KnowledgeLink
                key={key}
                id={post.id}
                title={post.title}
                date={post.date}
                description={post.description}
              />
            )
          })}
        </main>
      </Container>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      avatarUrl: 'https://avatars1.githubusercontent.com/u/40613276?v=4',
      posts: allPosts
    }
  }
}
