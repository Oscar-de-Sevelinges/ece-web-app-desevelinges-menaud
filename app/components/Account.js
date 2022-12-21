import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'

export default function Account({session}) {
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)
    const [full_name, setFullName] = useState(null)

    useEffect(() => {
        getProfile()
    }, [session])

    async function getProfile() {
        try {
            setLoading(true)
            let { data, error, status } = await supabase
                .from('profiles')
                .select('full_name, username, avatar_url')
                .eq('id', user.id)
                .single()
            if (error && status !== 406) {
                throw error
            }
            if (data) {
                setUsername(data.username)
                setAvatarUrl(data.avatar_url)
                setFullName(data.full_name)
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
                full_name,
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
        // tailwindcss styles for each div containing a label and input
        <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-1">
                <label htmlFor="full_name" className="text-sm font-medium">Full name</label>
                <input id="full_name" type="text" value={full_name || ""} onChange={(e) => setFullName(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="flex flex-col space-y-1">
                <label htmlFor="username" className="text-sm font-medium">Username</label>
                <input id="username" type="text" value={username || ""} onChange={(e) => setUsername(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="flex flex-col space-y-1">
                <button onClick={() => updateProfile({username, avatar_url})} disabled={loading} className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    {loading ? 'Loading...' : 'Update'}
                </button>
            </div>
            <div className="flex flex-col space-y-1">
                <button onClick={() => supabase.auth.signOut()} className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign out
                </button>
            </div>
        </div>
    )
}