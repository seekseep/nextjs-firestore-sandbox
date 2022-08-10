import { useUser } from "@room/hooks/users"
import { useRouter } from "next/router"

export default function ViewUser () {
  const { query: {userId}} = useRouter()
  const user = useUser(userId)

  return (
    <>
      <h2>View user</h2>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <td>{user?.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{user?.name}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
