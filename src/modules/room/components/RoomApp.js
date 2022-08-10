import { useRouter } from "next/router";
import { ResourceProvider } from "@room/hooks/resources";

export default function RoomApp ({ children }) {
  const { query: { roomId }} = useRouter()
  return (
    <ResourceProvider roomId={roomId}>
      {children}
    </ResourceProvider>
  )
}
