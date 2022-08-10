import { firestore } from "@/firebase";
import { useEffect } from "react";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { RESOURECES_ACTION_TYPE } from "@/constants";

let subscriptionId = 1

export function useSubscribeCollection (pathname, key, dispatch) {
  useEffect(() => {
    let id = subscriptionId++
    console.log("subscribe:", id, pathname)

    const unsubscribe = pathname ? onSnapshot(collection(firestore, pathname), (snapshot) => {
      snapshot.docChanges().forEach(docChange => {
        const payload = {
          key,
          id: docChange.doc.id,
          data: docChange.doc.data()
        }
        switch (docChange.type) {
          case "added": {
            dispatch({ type: RESOURECES_ACTION_TYPE.COLLECTION_ADD, payload })
            break
          }
          case "modified": {
            dispatch({ type: RESOURECES_ACTION_TYPE.COLLECTION_MODIFY, payload })
            break
          }
          case "removed": {
            dispatch({ type: RESOURECES_ACTION_TYPE.COLLECTION_REMOVE, payload })
            break
          }
        }
      })
    }) : () => {}

    return function cleanUp () {
      console.log("unsubscribe(collection):",id, pathname)
      unsubscribe()
    }
  }, [dispatch, pathname, key])
}

export function useSubscribeDocument (pathname, key, dispatch) {
  useEffect(() => {
    let id = subscriptionId++
    console.log("subscribe:", id, pathname)

    const unsubscribe = pathname ? onSnapshot(doc(firestore, pathname), (doc) => {
      dispatch({
        type: RESOURECES_ACTION_TYPE.DOCUMENT_UPDATE,
        payload: {
          key,
          id: doc.id,
          data: doc.data()
        }
      })
    }) : () => {}

    return function cleanUp() {
      console.log("unsubscribe(document):",id, pathname)
      unsubscribe()
    }
  }, [dispatch, pathname, key])
}
