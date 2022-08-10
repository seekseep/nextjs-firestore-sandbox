import { useRouter } from "next/router"
import { useCallback } from "react"

import { useDeletePostMutation } from "@room/hooks/posts"

export default function DeletePost () {
  const {query:{roomId, postId}, replace} = useRouter()

  const deletePost = useDeletePostMutation(roomId, postId)

  const handleDelete = useCallback(async event=>{
    event.preventDefault()
    await deletePost()
    replace(`/rooms/${roomId}/posts`)
  },[deletePost, replace, roomId])

  return (
    <>
      <h2>Delete Post</h2>
      <form onSubmit={handleDelete}>
        <button type="submit">Delete</button>
      </form>
    </>
  )
}
