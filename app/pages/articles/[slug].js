import { useRouter } from 'next/router';
import Article from '../../components/Article';
import Layout from '../../components/Layout';

function ArticlePage() {
  const router = useRouter();
  const { slug } = router.query;

  // Retrieve the data for the specific article based on the slug value
  const article = getArticleData(slug);

  return (
    <Layout>
      <Article article={article} />
    </Layout>
  );
}

export default ArticlePage;
