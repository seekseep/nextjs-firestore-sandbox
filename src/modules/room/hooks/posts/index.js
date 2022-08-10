import { useCallback } from "react";

import { createPost, deletePost, updatePost } from "@room/services/posts";

import { useResourceContext } from "@room/hooks/resources";

export function usePosts () {
  const { posts } = useResourceContext()
  return posts
}

export function usePost (postId) {
  const { posts } = useResourceContext()
  return posts[postId]
}

export function useCreatePostMutation (roomId) {
  return useCallback(async (data) => {
    createPost(roomId, data)
  }, [roomId])
}

export function useUpdatePostMutation (roomId, postId) {
  return useCallback(async (data) => {
    updatePost(roomId, postId, data)
  }, [roomId, postId])
}

export function useDeletePostMutation (roomId, postId) {
  return useCallback(async () => {
    deletePost(roomId, postId)
  }, [roomId, postId])
}
