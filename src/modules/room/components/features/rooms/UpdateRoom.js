import { useUpdateRoomMutation } from "@room/hooks/rooms"
import { useRoom } from "@room/hooks/rooms"
import { useCallback, useState } from "react"

export default function UpdateRoom () {
  const originalRoom = useRoom()

  const [room, setRoom] = useState({
    ...originalRoom,
    name: ""
  })

  const updateRoom = useUpdateRoomMutation(originalRoom?.id)

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault()
    await updateRoom(room)
  }, [room, updateRoom])

  return originalRoom && (
    <>
      <h2>Update Room</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput">Name:</label>
          <input required minLength={3} maxLength={128} type="text" id="nameInput" value={room?.name} onChange={({ target: {value: name} }) => setRoom(room => ({ ...room, name }))} />
        </div>
        <button>Save</button>
      </form>
    </>
  )
}
