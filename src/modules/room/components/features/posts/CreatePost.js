import { useCallback, useState } from "react"

import { useCreatePostMutation } from "@room/hooks/posts"
import { useRouter } from "next/router"

const emptyPost = {
  title: "",
  body: ""
}

export default function CreatePost () {
  const { query: {roomId}} = useRouter()

  const [post, setPost] = useState({ ...emptyPost })

  const createPostMutation = useCreatePostMutation(roomId)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    createPostMutation(post)
    setPost({ ...emptyPost })
    alert("Created")
  }, [createPostMutation, post])

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titleInpuit">Title:</label>
          <input required minLength={3} maxLength={128} type="text" id="titleInpuit" value={post.title} onChange={({ target: {value: title} }) => setPost(post => ({ ...post, title }))} />
        </div>
        <div>
          <label htmlFor="textareaInput">Body:</label>
          <textarea required id="textareaInput" value={post.body} onChange={({ target: {value: body} }) => setPost(post => ({ ...post, body }))} />
        </div>
        <div>
          <button type="submit">Create a post</button>
        </div>
      </form>
    </div>
  )

}
