import Link from "next/link"
import { useMemo } from "react"

import { useUsers } from "@room/hooks/users"
import { useRouter } from "next/router"

export default function ManageUsers () {
  const { query:{roomId} } = useRouter()

  const users = useUsers()
  const userList = useMemo(() => {
    if (!users) return users
    return Object.entries(users).map(([id, data]) => ({ id, ...data }))
  }, [users])

  return (
    <div>
      <h2>ViewUsers</h2>
      {userList === undefined ? (
        <p>Loading</p>
      ) : userList?.length < 1 ? (
        <p>No users</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {userList.map(user => (
              <tr key={user.id}>
                <td>
                  <Link href={`/rooms/${roomId}/users/${user.id}`}>{user.name}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
