import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'

export default function Account({session}) {
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)

    useEffect(() => {
        getProfile()
    }, [session])

    async function getProfile() {
        try {
            setLoading(true)
            let { data, error, status } = await supabase
                .from('profiles')
                .select('username, avatar_url')
                .eq('id', user.id)
                .single()
            if (error && status !== 406) {
                throw error
            }
            if (data) {
                setUsername(data.username)
                setAvatarUrl(data.avatar_url)
            }
        } catch (error) {
            alert(error.message)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    async function updateProfile({ username, avatar_url }) {
        try {
            setLoading(true)
            const updates = {
                id: user.id,
                username,
                avatar_url,
            }
            let { error } = await supabase
                .from('profiles')
                .upsert(updates)
            if (error) {
                throw error
            }
        } catch (error) {
            alert(error.message)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" value={session.user.email} disabled />
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={username || ""} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <button onClick={() => updateProfile({username, avatar_url})} disabled={loading}>
                    {loading ? 'Loading...' : 'Update'}
                </button>
            </div>
            <div>
                <button onClick={() => supabase.auth.signOut()}>Sign out</button>
            </div>
        </div>
    )
}