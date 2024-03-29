import { useSession } from "@supabase/auth-helpers-react"
import React, { useEffect, useState } from 'react'
import Article from '../components/Article'
import supabase from "./api/supabase"

export default function ArticlesPage() {
  const [articles, setArticles] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const session = useSession()

  useEffect(() => {
    const fetchData = async () => {
      if(supabase) {
        const { data, error } = await supabase.from('articles').select()
        if (error) {
          setFetchError('Error fetching articles')
          setArticles(null)
          console.log(error)
        }
        if (data) {
          setArticles(data)
          setFetchError(null)
        }
      }
    }
    fetchData()
  }, [])

  const getUsername = async () => {
    const userData = await supabase.from('profiles').select('username').eq('id', session.user.id)
    const username = userData.data[0].username
    return username
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const autorName = await getUsername()
    const trimmedTitle = title.trim()
    const trimmedContent = content.trim()
    if (trimmedTitle !== '' && trimmedContent !== '') {
      const { data, error } = await supabase.from('articles').insert([
        {
          userID: session.user.id,
          title: title,
          content: content,
          autor: autorName,
        }
      ])
      if (error) {
        console.log(error)
      }
      if (data) {
        console.log(data)
      }
      window.location.reload()
    }
    else if (trimmedTitle === '') {
      window.alert('Title cannot be empty')
    }
    else if (trimmedContent === '') {
      window.alert('Content cannot be empty')
    }
  }

  return (
    <div>
      {fetchError && (<p>{fetchError}</p>)}
      <div className="flex flex-col text-center">
        {articles && (
          articles.map((article) => <Article articleID={article.id} title={article.title} content={article.content} autorID={article.userID} autor={article.autor} created_at={article.created_at}/>)
          )
        }
      </div>
      {session && (
        <form className="pt-8" onSubmit={handleSubmit}>
          <textarea
            className="w-full border border-gray-300 rounded p-2 mb-4 text-black"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full border border-gray-300 rounded p-2 mb-4 text-black"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="pb-4">
            <button
              className="button primary block bg-blue-500 text-white rounded-md px-4 py-2 w-32 mx-auto"
              type="submit"
            >
              Add article
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
