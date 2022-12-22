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
    <div className="form-widget flex flex-col mx-auto my-auto">
      <div>
        <label htmlFor="full_name" className="mr-6">Full name</label>
        <input
          className="text-black w-32 rounded-md"
          id="full_name"
          type="text"
          value={full_name || ''}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="username" className="mr-5">Username</label>
        <input
          className="text-black w-32 rounded-md"
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="p-4">
        <button
          className="button primary block bg-blue-500 text-white rounded-md px-4 py-2 w-32"
          onClick={() => updateProfile({ username, full_name })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div className="p-4">
        <button className="button block bg-blue-500 text-white rounded-md px-4 py-2 w-32" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}