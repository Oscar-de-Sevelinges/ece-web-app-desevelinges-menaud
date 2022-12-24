import moment from 'moment'
import { useEffect, useState } from 'react'
import supabase from "../pages/api/supabase"

export default function Comment({ content, userID, created_at }) {
    const [user, setUser] = useState(null)
    const [fetchError, setFetchError] = useState(null)
    const createdAt = moment(created_at).format('DD/MM/YYYY HH:mm')

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

    return (
        <div>
            {fetchError && (<p>{fetchError}</p>)}
            {user && (
                <p>{user.username}</p>
            )}
            <p>{content}</p>
            <p>{createdAt}</p>
        </div>
    )
}