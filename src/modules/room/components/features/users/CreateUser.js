import { useCallback, useState } from "react"

import { useCreateUserMutation } from "@room/hooks/users"
import { useRouter } from "next/router"

const emptyUser = { name:"" }

export default function CreateUser () {
  const { query: {roomId}} = useRouter()

  const [user, setUser] = useState({ ...emptyUser })

  const createUserMutation = useCreateUserMutation(roomId)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    createUserMutation(user)
    setUser({ ...emptyUser })
    alert("Created")
  }, [createUserMutation, user])

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput">Name:</label>
          <input required minLength={3} maxLength={128} type="text" id="nameInput" value={user.name} onChange={({ target: {value: name} }) => setUser(user => ({ ...user, name }))} />
        </div>
        <div>
          <button type="submit">Create a user</button>
        </div>
      </form>
    </div>
  )

}
