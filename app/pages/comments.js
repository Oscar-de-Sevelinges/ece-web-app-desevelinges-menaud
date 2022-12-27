import { useEffect, useState } from 'react';
import Comment from '../components/Comment';
import supabase from "./api/supabase";

export default function CommentsList() {
    const [comments, setComments] = useState([])
    const [fetchError, setFetchError] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
        if(supabase) {
            const currentUrl = window.location.href;
            const parts = currentUrl.split('/');
            const aid = parts[parts.length - 1];
            const { data, error } = await supabase.from('comments').select().eq('articleID', aid)
          if (error) {
            setFetchError('Error fetching comments')
            setComments(null)
            console.log(error)
          }
          if (data) {
            setComments(data)
            setFetchError(null)
          }
        }
      }
      fetchData()
    }, [])

    return (
      <div>
        {fetchError && (<p>{fetchError}</p>)}
        {comments && (
          comments.map((comment) => <Comment commentID={comment.id} content={comment.content} userID={comment.userID} created_at={comment.created_at} />))}
      </div>
    )
}