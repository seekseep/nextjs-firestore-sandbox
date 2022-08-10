import { createContext, useContext, useReducer } from "react"

import { reducer as resourcesReducer } from "@/reducers/resources"

import { useSubscribeCollection } from "@/hooks/resources"

const ResourceContext = createContext()

const initializerArg = {
  rooms: {},
}

export function ResourceProvider ({ children }) {
  const [resources, resourcesDispatch] = useReducer(resourcesReducer, initializerArg)
  useSubscribeCollection("/rooms", "rooms", resourcesDispatch)

  return (
    <ResourceContext.Provider value={resources}>
      {children}
    </ResourceContext.Provider>
  )
}

export function useResourceContext() {
  return useContext(ResourceContext)
}
