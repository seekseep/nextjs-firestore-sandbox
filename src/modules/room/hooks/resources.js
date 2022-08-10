import { createContext, useContext, useReducer } from "react"
import { reducer as resourcesReducer } from "@/reducers/resources"

import { useSubscribeCollection, useSubscribeDocument } from "@/hooks/resources"

const ResourceContext = createContext()

const initializerArg = {
  rooms: {},
  users: {},
  posts: {}
}

export function ResourceProvider ({ roomId, children }) {
  const [resources, resourcesDispatch] = useReducer(resourcesReducer, initializerArg)

  useSubscribeDocument(roomId ? `/rooms/${roomId}` : null, "rooms", resourcesDispatch)
  useSubscribeCollection(roomId ? `/rooms/${roomId}/users` : null, "users", resourcesDispatch)
  useSubscribeCollection(roomId ? `/rooms/${roomId}/posts` : null, "posts", resourcesDispatch)

  return (
    <ResourceContext.Provider value={resources}>
      {children}
    </ResourceContext.Provider>
  )
}

export function useResourceContext() {
  return useContext(ResourceContext)
}
