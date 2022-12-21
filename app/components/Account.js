import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'

export default function Account({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [full_name, setFullName] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
        setLoading(true)
        let { data, error, status } = await supabase
            .from('profiles')
            .select('full_name, username')
            .eq('id', user.id)
            .single()
        if (error && status !== 406) {
            throw error
        }
        if (data) {
            setUsername(data.username)
            setFullName(data.full_name)
        }
    } catch (error) {
        alert(error.message)
        console.log(error)
    } finally {
        setLoading(false)
    }
  }

  async function updateProfile({ username, full_name }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        username,
        full_name,
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="full_name">Full name</label>
        <input
          className="text-black"
          id="full_name"
          type="text"
          value={full_name || ''}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          className="text-black"
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({ username, full_name })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}