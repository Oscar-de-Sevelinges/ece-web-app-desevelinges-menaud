import { Client } from '@supabase/supabase-js'

import Layout from '../components/Layout'
import '../styles/globals.css'

//const supabase = new Client(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
//const articles = await supabase.from('articles').select('*')

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} /*articles={articles}*//>
    </Layout>
  )
}

export default MyApp
