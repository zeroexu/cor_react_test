import React from 'react'
export const initialState = {

}

export const reducer = (state, action) => {
  let newstate = {}
  switch (action.type) {
    case 'reset':
      newstate = initialState
      break

    default:
      newstate = {}
  }
  const copyState = Object.assign({}, state)
  return Object.assign(copyState, newstate)
}

export const Context = React.createContext()
