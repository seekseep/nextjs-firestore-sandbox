import { useCallback } from "react";

import { createUser, deleteUser, updateUser } from "@room/services/users";

import { useResourceContext } from "@room/hooks/resources";
import { useRouter } from "next/router";

export function useUsers () {
  const { users } = useResourceContext()
  return users
}

export function useUser (userId) {
  const { users } = useResourceContext()
  return users[userId]
}

export function useCreateUserMutation (roomId) {
  return useCallback(async (data) => {
    createUser(roomId, data)
  }, [roomId])
}

export function useUpdateUserMutation (roomId, userId) {
  return useCallback(async (data) => {
    updateUser(roomId, userId, data)
  }, [roomId, userId])
}

export function useDeleteUserMutation (roomId, userId) {
  return useCallback(async () => {
    deleteUser(roomId, userId)
  }, [roomId, userId])
}
