import { useDeleteRoomMutation } from "@home/hooks/rooms"
import { useRouter } from "next/router"
import { useCallback } from "react"

export default function DeleteRoom () {
  const {query:{roomId},replace} = useRouter()

  const deleteRoom = useDeleteRoomMutation(roomId)

  const handleDelete = useCallback(async event=>{
    event.preventDefault()
    await deleteRoom()
    replace("/rooms")
  },[deleteRoom, replace])

  return (
    <>
      <h2>Delete Room</h2>
      <form onSubmit={handleDelete}>
        <button type="submit">Delete</button>
      </form>
    </>

  )
}
