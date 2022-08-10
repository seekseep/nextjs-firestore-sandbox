import Link from "next/link"
import { useRouter } from "next/router"

import CreatePost from "@room/components/features/posts/CreatePost"
import ViewPosts from "@room/components/features/posts/ViewPosts"

export default function Posts () {
  const { query: {roomId}} = useRouter()
  return (
    <>
      <Link href="/">Home</Link> &gt;
      <Link href="/rooms">Rooms</Link> &gt;
      <Link href={`/rooms/${roomId}`}>Room</Link> &gt;
      <span>Posts</span>
      <hr />
      <h1>Posts</h1>
      <hr />
      <CreatePost />
      <ViewPosts />
    </>
  )
}
