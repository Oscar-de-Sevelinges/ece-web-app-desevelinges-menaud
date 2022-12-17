import { SupabaseClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import Article from '../components/Article'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = new SupabaseClient(supabaseUrl, supabaseKey)

export default function ArticlesPage() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { body } = await supabase.from('articles').select('*')
      setArticles(body)
    }
    fetchData()
  }, [])

  return (
    <div>
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </div>
  )
}
