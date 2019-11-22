import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SopaDeLetra from './sopa_de_letra'
import Searcher from './searcher'

const Presentation = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios(
        'https://api.myjson.com/bins/pazuy'
      )
      console.log(data)
      setData(data.data.resources)
    }

    fetchData()
  }, [])

  return (
    <div id='container'>
      <div id='presentation'>
        <SopaDeLetra matrix={data[2]} />
        <Searcher matrix={data[2]} />
      </div>
    </div>
  )
}

export default Presentation
