import { useCallback, useState } from "react"

import { useCreateRoomMutation } from "@home/hooks/rooms"

const emptyRoom = { name:"" }

export default function CreateRoom () {
  const [room, setRoom] = useState({ ...emptyRoom })

  const createRoomMutation = useCreateRoomMutation()

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    createRoomMutation(room)
    setRoom({ ...emptyRoom })
    alert("Created")
  }, [createRoomMutation, room])

  return (
    <div>
      <h2>Create Room</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput">Name:</label>
          <input required minLength={3} maxLength={128} type="text" id="nameInput" value={room.name} onChange={({ target: {value: name} }) => setRoom(room => ({ ...room, name }))} />
        </div>
        <div>
          <button type="submit">Create a room</button>
        </div>
      </form>
    </div>
  )

}
