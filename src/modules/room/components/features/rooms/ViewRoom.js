import { useRoom } from "@room/hooks/rooms"

export default function ViewRoom () {
  const room = useRoom()

  return (
    <>
      <h2>View Room</h2>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <td>{room?.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{room?.name}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
