import { firestore } from "@/firebase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

export async function updateRoom(roomId, data) {
  const roomRef = doc(firestore, 'rooms', roomId)
  return await updateDoc(roomRef, data)
}

export async function deleteRoom(roomId) {
  const roomRef = doc(firestore, 'rooms', roomId)
  return await deleteDoc(roomRef)
}
