import { useRouter } from "next/router"
import { useCallback, useState } from "react"

import { useUpdatePostMutation } from "@room/hooks/posts"

export default function UpdatePost () {
  const { query:{ roomId, postId}} = useRouter()

  const [post, setPost] = useState({
    title: "",
    body: "",
  })

  const updatePost = useUpdatePostMutation(roomId, postId)

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault()
    await updatePost(post)
  }, [updatePost, post])

  return (
    <>
      <h2>Update Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titleInpuit">Title:</label>
          <input required minLength={3} maxLength={128} type="text" id="titleInpuit" value={post.title} onChange={({ target: {value: title} }) => setPost(post => ({ ...post, title }))} />
        </div>
        <div>
          <label htmlFor="textareaInput">Body:</label>
          <textarea required id="textareaInput" value={post.body} onChange={({ target: {value: body} }) => setPost(post => ({ ...post, body }))} />
        </div>
        <button>Save</button>
      </form>
    </>
  )
}
