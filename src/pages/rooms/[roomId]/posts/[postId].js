import Link from "next/link"
import { useRouter } from "next/router"

import ViewPost from "@room/components/features/posts/ViewPost"
import UpdatePost from "@room/components/features/posts/UpdatePost"
import DeletePost from "@room/components/features/posts/DeletePost"

export default function Post () {
  const { query:{roomId, postId}} = useRouter()

  return (
    <>
      <Link href="/">Home</Link> &gt;
      <Link href="/rooms">Rooms</Link> &gt;
      <Link href={`/rooms/${roomId}`}>Room</Link> &gt;
      <Link href={`/rooms/${roomId}/posts`}>Posts</Link> &gt;
      <span>Post</span>
      <hr />
      <hr />
      <h1>Post</h1>
      <hr />
      <ViewPost />
      <UpdatePost />
      <DeletePost />
    </>
  )
}
