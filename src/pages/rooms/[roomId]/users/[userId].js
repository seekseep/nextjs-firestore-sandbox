import Link from "next/link"
import { useRouter } from "next/router"

import ViewUser from "@room/components/features/users/ViewUser"
import UpdateUser from "@room/components/features/users/UpdateUser"
import DeleteUser from "@room/components/features/users/DeleteUser"

export default function User () {
  const { query:{roomId, userId}} = useRouter()

  return (
    <>
      <Link href="/">Home</Link> &gt;
      <Link href="/rooms">Rooms</Link> &gt;
      <Link href={`/rooms/${roomId}`}>Room</Link> &gt;
      <Link href={`/rooms/${roomId}/users`}>Users</Link> &gt;
      <span>User</span>
      <hr />
      <hr />
      <h1>User</h1>
      <hr />
      <ViewUser />
      <UpdateUser />
      <DeleteUser />
    </>
  )
}
