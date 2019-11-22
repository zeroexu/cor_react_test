import React from 'react'
import logoSrc from '../assets/images/cor-light.png'

const ResultSearch = ({
  horizontal = 0,
  vertical = 0,
  diagonalDesc = 0,
  diagonalAsc = 0,
  horizontalReversed = 0,
  verticalReversed = 0,
  diagonalDescReversed = 0,
  diagonalAscReversed = 0
}) => {
  return (
    <div id='result-search'>
      <h3>Resultados</h3>
      <ul>
        <li>Vertical: <span>{horizontal}</span></li>
        <li>Horizontal: <span>{vertical}</span></li>
        <li>diagonalDesc: <span>{diagonalDesc}</span></li>
        <li>diagonalAsc: <span>{diagonalAsc}</span></li>

        <li>VerticalReversed: <span>{horizontalReversed}</span></li>
        <li>HorizontalReversed: <span>{verticalReversed}</span></li>
        <li>diagonalDescReversed: <span>{diagonalDescReversed}</span></li>
        <li>diagonalAscReversed: <span>{diagonalAscReversed}</span></li>
      </ul>
    </div>)
}

export default ResultSearch
