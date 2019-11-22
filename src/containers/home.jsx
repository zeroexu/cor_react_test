import React, { useReducer } from 'react'
import { Context, initialState, reducer } from '../store/index'
import Header from '../components/header'
import Presentation from '../components/presentation'

const Home = () => {
  const [store, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ store, dispatch }}>
      <>
        <Header />
        <Presentation />
      </>
    </Context.Provider>)
}

export default Home
