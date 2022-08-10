import Link from "next/link"
import { useMemo } from "react"

import { usePosts } from "@room/hooks/posts"
import { useRouter } from "next/router"

export default function ManagePosts () {
  const { query:{roomId} } = useRouter()

  const posts = usePosts()
  const postList = useMemo(() => {
    if (!posts) return posts
    return Object.entries(posts).map(([id, data]) => ({ id, ...data }))
  }, [posts])

  return (
    <div>
      <h2>ViewPosts</h2>
      {postList === undefined ? (
        <p>Loading</p>
      ) : postList?.length < 1 ? (
        <p>No posts</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {postList.map(post => (
              <tr key={post.id}>
                <td>
                  <Link href={`/rooms/${roomId}/posts/${post.id}`}>{post.title}</Link>
                </td>
                <td>
                  {post.body}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
