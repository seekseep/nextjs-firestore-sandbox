import Link from 'next/link'

import CreateRoom from '@home/components/features/rooms/CreateRoom'
import ManageRooms from '@home/components/features/rooms/ManageRooms'

export default function Rooms() {
  return (
    <>
      <Link href="/">Home</Link> &gt;
      <span>Room</span>
      <hr />
      <h1>Rooms</h1>
      <hr />
      <CreateRoom />
      <ManageRooms />
    </>
  )
}
