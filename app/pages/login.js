import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import supabase from './api/supabase';

export default function Login() {
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={['github']}
      theme="default"
    />
  )
}