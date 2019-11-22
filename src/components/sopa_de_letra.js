import React from 'react'

const SopaDeLetra = ({ matrix = [] }) => {
  if (matrix.length === 0) {
    return <h2>..loading..</h2>
  }

  return (
    <div id='sopa-de-letra'>
      <AssembleRows matrix={matrix} />
    </div>)
}

const AssembleRows = ({ matrix = [] }) => {
  return matrix.map((element, i) => {
    return <div className='row-vowel' key={i}><AssembleCols rowData={element} key={i} index={i} /></div>
  })
}

const AssembleCols = ({ rowData = [], index }) => {
  return rowData.map((element, j) => {
    return <div className='vowel' key={j + '-' + index}>{element}</div>
  })
}

export default SopaDeLetra
