import Link from "next/link"
import { useRouter } from "next/router"

import CreateUser from "@room/components/features/users/CreateUser"
import ViewUsers from "@room/components/features/users/ViewUsers"

export default function Users () {
  const { query: {roomId}} = useRouter()
  return (
    <>
      <Link href="/">Home</Link> &gt;
      <Link href="/rooms">Rooms</Link> &gt;
      <Link href={`/rooms/${roomId}`}>Room</Link> &gt;
      <span>Users</span>
      <hr />
      <h1>Users</h1>
      <hr />
      <CreateUser />
      <ViewUsers />
    </>
  )
}
