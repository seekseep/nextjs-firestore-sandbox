import { firestore } from "@/firebase";
import { doc, addDoc, collection, deleteDoc, updateDoc } from "firebase/firestore";

export async function createRoom (data) {
  const roomsRef = collection(firestore, "rooms")
  return await addDoc(roomsRef, data)
}

export async function updateRoom(roomId, data) {
  const roomRef = doc(firestore, 'rooms', roomId)
  return await updateDoc(roomRef, data)
}

export async function deleteRoom(roomId) {
  const roomRef = doc(firestore, 'rooms', roomId)
  return await deleteDoc(roomRef)
}
