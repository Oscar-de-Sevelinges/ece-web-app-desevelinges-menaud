import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import moment from 'moment';
import { useEffect, useState } from 'react';
import supabase from '../api/supabase';
import CommentsList from '../comments';

export const getStaticPaths = async () => {
  const {data, error} = await supabase.from('articles').select()

  const paths = data.map(article => {
    return {
      params: { slug: article.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.slug
  const {data, error} = await supabase.from('articles').select().eq('id', id)
  return {
    props: {
      article: data[0]
    }
  }
}

const ArticlePage = (data) => {
  const [comment, setComment] = useState('')
  const session = useSession()
  const createdAt = moment(data.article.created_at).format('DD/MM/YYYY');

  const handleSubmit = async (e) => {
    e.preventDefault()
    const currentUrl = window.location.href;
    const parts = currentUrl.split('/');
    const aid = parts[parts.length - 1];
    const { data, error } = await supabase
      .from('comments')
      .insert({
        articleID: aid,
        content: comment,
        userID: session.user.id
      })
    if (error) {
      console.log(error)
    }
    if (data) {
      console.log(data)
    }
  }

  return (
    <div>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{data.article.title}</h1>
        <p className="text-lg leading-relaxed mb-4">{data.article.content}</p>
        <div className="flex items-center text-sm font-medium">
          <p className="mr-2">
            Published on {createdAt}
          </p>
          <p>
            by {data.article.autor}
          </p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <CommentsList />
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full border border-gray-300 rounded p-2 mb-4"
            placeholder="Add a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="button primary block bg-blue-500 text-white rounded-md px-4 py-2 w-32"
            type="submit"
          >
            Add comment
          </button>
        </form>
      </div>
    </div>
  )
}

export default ArticlePage