import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import supabase from './api/supabase';

export default function Login() {
  return (
    <Auth
      className="w-1/2"
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
    />
  )
}