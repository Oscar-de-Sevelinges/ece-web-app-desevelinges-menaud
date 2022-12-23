import React, { useEffect, useState } from 'react'
import Article from '../components/Article'
import supabase from "./api/supabase"

export default function ArticlesPage() {
  const [articles, setArticles] = useState([])
  const [fetchError, setFetchError] = useState(null)

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

  return (
    <div>
      {fetchError && (<p>{fetchError}</p>)}
      {articles && (
        articles.map((article) => <Article articleID={article.id} title={article.title} content={article.content} autor={article.autor} created_at={article.created_at} />))}
    </div>
  )
}
