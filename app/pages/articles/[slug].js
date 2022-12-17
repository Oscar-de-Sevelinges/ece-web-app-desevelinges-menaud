import { SupabaseClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import Article from '../components/Article'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = new SupabaseClient(supabaseUrl, supabaseKey)

export default function ArticlePage({ slug }) {
  const [article, setArticle] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const { body } = await supabase.from('articles').eq('slug', slug).select('*')
      setArticle(body[0])
    }
    useEffect(() => {
      async function fetchData() {
        const { body } = await supabase.from('articles').eq('slug', slug).select('*')
        setArticle(body[0])
      }
      fetchData()
    }, [slug])
    return (
      <div>
        {article ? <Article {...article} /> : <div>Loading...</div>}
      </div>
    )
  })
}