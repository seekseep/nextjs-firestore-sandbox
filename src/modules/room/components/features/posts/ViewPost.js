import { usePost } from "@room/hooks/posts"
import { useRouter } from "next/router"

export default function ViewPost () {
  const { query: {postId}} = useRouter()
  const post = usePost(postId)

  return (
    <>
      <h2>View post</h2>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <td>{post?.id}</td>
          </tr>
          <tr>
            <th>Title</th>
            <td>{post?.title}</td>
          </tr>
          <tr>
            <th>Body</th>
            <td>{post?.body}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
