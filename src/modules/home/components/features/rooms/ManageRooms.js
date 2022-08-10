import Link from "next/link"
import { useMemo, useCallback } from "react"

import { useRooms } from "@home/hooks/rooms"
import { useDeleteRoomMutation } from "@home/hooks/rooms"

function RoomRow ({ room }) {
  const deleteRoom = useDeleteRoomMutation(room.id)

  const handleDelete = useCallback(async (room) => {
    await deleteRoom()
    alert(`Succeed to delete room:${room.name}`)
  }, [deleteRoom])

  return (
    <tr key={room.id}>
      <td>
        <Link href={`/rooms/${room.id}`}>{room.name}</Link>
      </td>
      <td>
        <button onClick={() => handleDelete(room)}>Delete</button>
      </td>
    </tr>
  )
}

export default function ManageRooms () {
  const rooms = useRooms()
  const roomList = useMemo(() => {
    if (!rooms) return rooms
    return Object.entries(rooms).map(([id, data]) => ({ id, ...data }))
  }, [rooms])

  return (
    <div>
      <h2>ViewRooms</h2>
      {roomList === undefined ? (
        <p>Loading</p>
      ) : roomList?.length < 1 ? (
        <p>No rooms</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {roomList.map(room => (
              <RoomRow key={room.id} room={room} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
