import React, { Component, useState } from 'react'
import ResultSearch from './result_search'
const utils = require('../utils/utils')
const { doAsearch } = utils.default
const initState = {
  horizontal: 0,
  vertical: 0,
  diagonalDesc: 0,
  diagonalAsc: 0,
  horizontalReversed: 0,
  verticalReversed: 0,
  diagonalDescReversed: 0,
  diagonalAscReversed: 0
}

const Searcher = ({ matrix = [] }) => {
  const [result, setResult] = useState(initState)
  const searchCallback = (word, matrix) => {
    setResult(doAsearch(word, matrix))
  }
  console.log(result)
  return (
    <div id='searcher'>
      <CustomInput onChange={searchCallback} matrix={matrix} />
      <ResultSearch
        horizontal={result.horizontal}
        vertical={result.vertical}
        diagonalDesc={result.diagonalDesc}
        diagonalAsc={result.diagonalAsc}

        horizontalReversed={result.horizontalReversed}
        verticalReversed={result.verticalReversed}
        diagonalDescReversed={result.diagonalDescReversed}
        diagonalAscReversed={result.diagonalAscReversed}
      />
    </div>)
}

class CustomInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onChange(e.target.value, this.props.matrix)
  }

  render() {
    return <input type='text' name='search' onChange={this.handleChange} placeholder='Busca aquí la palabra' />
  }
}

export default Searcher
