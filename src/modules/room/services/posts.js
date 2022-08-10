import { firestore } from "@/firebase";

import { doc, addDoc, collection, deleteDoc, updateDoc } from "firebase/firestore";

export async function createPost (roomId, data) {
  const postsRef = collection(firestore, "rooms", roomId, "posts")
  return await addDoc(postsRef, data)
}

export async function updatePost(roomId, postId, data) {
  const postRef = doc(firestore, "rooms", roomId, "posts", postId)
  return await updateDoc(postRef, data)
}

export async function deletePost(roomId, postId) {
  const postRef = doc(firestore, "rooms", roomId, "posts", postId)
  return await deleteDoc(postRef)
}
