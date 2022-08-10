import { useRouter } from "next/router";
import { useCallback } from "react";

import { useResourceContext } from "@room/hooks/resources";
import { updateRoom } from "@room/services/rooms";

export function useRoom () {
  const { query : {roomId}} = useRouter()
  const { rooms } = useResourceContext()
  return rooms[roomId]
}

export function useUpdateRoomMutation (roomId) {
  return useCallback(async (data) => {
    updateRoom(roomId, data)
  }, [roomId])
}
