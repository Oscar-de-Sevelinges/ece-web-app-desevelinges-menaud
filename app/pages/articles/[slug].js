import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Client } from 'supabase-client'
import Article from '../../components/Article'

export default function ArticlePage() {
  const [article, setArticle] = useState(null)
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    const supabase = Client.fromEnv();
    supabase
      .query(`SELECT * FROM articles WHERE id = '${slug}'`)
      .then(({ data }) => {
        setArticle(data[0]);
      });
  }, []);

  return (
    <div>
      {article && <Article article={article} />}
    </div>
  )
}