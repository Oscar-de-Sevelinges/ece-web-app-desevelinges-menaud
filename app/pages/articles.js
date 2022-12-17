import { useEffect, useState } from 'react'
import Article from '../components/Article'
import supabase from "../utils/supabaseClient"

export default function ArticlesPage() {
  const [articles, setArticles] = useState([])
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
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
    fetchData()
  }, [])

  return (
    <div>
      {fetchError && (<p>{fetchError}</p>)}
      {articles && (
        articles.map((article) => <Article {...article} />))}
    </div>
  )
}
