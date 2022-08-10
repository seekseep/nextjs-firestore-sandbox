import { useRouter } from "next/router"
import Link from 'next/link'

export default function ViewRoomMenu () {
  const { query: {roomId}} = useRouter()
  return (
    <>
      <h2>View Room Menu</h2>
      <ul>
        <li>
            <Link href={`/rooms/${roomId}/users`}>Users</Link>
        </li>
        <li>
            <Link href={`/rooms/${roomId}/posts`}>Posts</Link>
        </li>
      </ul>
    </>
  )
}
