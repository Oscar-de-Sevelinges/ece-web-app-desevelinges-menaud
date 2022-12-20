import moment from 'moment';
import supabase from '../api/supabase';

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
  const createdAt = moment(data.article.created_at).format('DD/MM/YYYY');
  return (
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
  )
}

export default ArticlePage