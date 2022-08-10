import { addDoc, collection, getFirestore } from "firebase/firestore";

import { firestore } from '@/firebase'

export async function createRoom (room) {
  const roomRef = await addDoc(collection(firestore, '/rooms'), room)
  return roomRef
}
