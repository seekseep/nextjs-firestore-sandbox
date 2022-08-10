import { firestore } from "@/firebase";

import { doc, addDoc, collection, deleteDoc, updateDoc } from "firebase/firestore";

export async function createUser (roomId, data) {
  const usersRef = collection(firestore, "rooms", roomId, "users")
  return await addDoc(usersRef, data)
}

export async function updateUser(roomId, userId, data) {
  const userRef = doc(firestore, "rooms", roomId, "users", userId)
  return await updateDoc(userRef, data)
}

export async function deleteUser(roomId, userId) {
  const userRef = doc(firestore, "rooms", roomId, "users", userId)
  return await deleteDoc(userRef)
}
