import { useRouter } from "next/router"
import { useCallback } from "react"

import { useDeleteUserMutation } from "@room/hooks/users"

export default function DeleteUser () {
  const {query:{roomId, userId}, replace} = useRouter()

  const deleteUser = useDeleteUserMutation(roomId, userId)

  const handleDelete = useCallback(async event=>{
    event.preventDefault()
    await deleteUser()
    replace(`/rooms/${roomId}/users`)
  },[deleteUser, replace, roomId])

  return (
    <>
      <h2>Delete User</h2>
      <form onSubmit={handleDelete}>
        <button type="submit">Delete</button>
      </form>
    </>
  )
}
