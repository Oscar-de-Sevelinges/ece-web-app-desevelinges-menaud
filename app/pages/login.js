import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import Account from '../components/Account'


const Login = () => {
  const session = useSession()
  const supabaseClient = useSupabaseClient()
  return (
    <div>
      {!session ? (
        <Auth
          className="w-full h-full"
          supabaseClient={supabaseClient}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={['github']}
        />
      ) : (
        <Account session={session} />
      )}
    </div>
  )
}

export default Login