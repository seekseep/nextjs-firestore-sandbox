import { useCallback } from "react";

import { createRoom, deleteRoom, updateRoom } from "@home/services/rooms";
import { useResourceContext } from "../resources";

export function useRooms () {
  const { rooms } = useResourceContext()
  return rooms
}

export function useCreateRoomMutation () {
  return useCallback(async (data) => {
    createRoom(data)
  }, [])
}

export function useDeleteRoomMutation (roomId) {
  return useCallback(async () => {
    deleteRoom(roomId)
  }, [roomId])
}
