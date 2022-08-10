import Link from "next/link"

import ViewRoom from "@room/components/features/rooms/ViewRoom"
import ViewRoomMenu from "@room/components/features/rooms/ViewRoomMenu"
import UpdateRoom from "@room/components/features/rooms/UpdateRoom"
import DeleteRoom from "@room/components/features/rooms/DeleteRoom"

export default function Room () {
  return (
    <>
      <Link href="/">Home</Link> &gt;
      <Link href="/rooms">Rooms</Link> &gt;
      <span>Room</span>
      <hr />
      <h1>Room</h1>
      <hr />
      <ViewRoom />
      <ViewRoomMenu />
      <UpdateRoom />
      <DeleteRoom />
    </>
  )
}
