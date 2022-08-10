import { RESOURECES_ACTION_TYPE } from "@/constants";

/**
 * @param {Object<string, Object<string, Object<string, any>>>} state
 * @param {{
 *   type: string,
 *   payload: {
 *     key: string
 *     id: string
 *     data: Object<string, any>
 *   }
 * }} action
 */
export function reducer (state, action) {
  const { key, id, data } = action.payload

  console.log(key, id, data)

  const collection = { ...state[action.payload.key] }

  switch (action.type) {
    case RESOURECES_ACTION_TYPE.COLLECTION_ADD:
    case RESOURECES_ACTION_TYPE.COLLECTION_MODIFY:
    case RESOURECES_ACTION_TYPE.DOCUMENT_UPDATE: {
      collection[id] = { id, ...data }
      break
    }
    case RESOURECES_ACTION_TYPE.COLLECTION_REMOVE: {
      delete collection[id]
      break
    }
  }

  return {
    ...state,
    [key]: collection
  }
}
