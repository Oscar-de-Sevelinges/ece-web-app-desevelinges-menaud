import { useSession } from "@supabase/auth-helpers-react"
import moment from 'moment'
import { useEffect, useState } from 'react'
import supabase from "../pages/api/supabase"

export default function Comment({ commentID, content, userID, created_at }) {
    const [user, setUser] = useState(null)
    const [fetchError, setFetchError] = useState(null)
    const createdAt = moment(created_at).format('DD/MM/YYYY HH:mm')
    const session = useSession()

    useEffect(() => {
        const fetchData = async () => {
            if(supabase) {
                const { data, error } = await supabase.from('profiles').select().eq('id', userID)
                if (error) {
                    setFetchError('Error fetching user')
                    setUser(null)
                    console.log(error)
                }
                if (data) {
                    setUser(data[0])
                    setFetchError(null)
                }
            }
        }
        fetchData()
    }, [])

    const handleDelete = async () => {
        const { data, error } = await supabase.from('comments').delete().eq('id', commentID)
        if (error) {
            console.log(error)
        }
        if (data) {
            console.log(data)
        }
        window.location.reload()
    }

    return (
        <div className="pb-8">
            {fetchError && (<p>{fetchError}</p>)}
            {user && (
                <p>{user.username}</p>
            )}
            <p>{content}</p>
            <p>{createdAt}</p>
            {session.user.id === userID && (
                <button
                    className="button primary block bg-blue-500 text-white rounded-md px-4 py-2 w-32"
                    type="submit"
                    onClick={handleDelete}
                >
                    Delete comment
                </button>
            )}
        </div>
    )
}