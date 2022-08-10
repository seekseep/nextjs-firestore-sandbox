import { useRouter } from "next/router"
import { useCallback, useState } from "react"

import { useUpdateUserMutation } from "@room/hooks/users"

export default function UpdateUser () {
  const { query:{ roomId, userId}} = useRouter()

  const [user, setUser] = useState({
    name: ""
  })

  const updateUser = useUpdateUserMutation(roomId, userId)

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault()
    await updateUser(user)
  }, [updateUser, user])

  return (
    <>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput">Name:</label>
          <input required minLength={3} maxLength={128} type="text" id="nameInput" value={user?.name} onChange={({ target: {value: name} }) => setUser(user => ({ ...user, name }))} />
        </div>
        <button>Save</button>
      </form>
    </>
  )
}
