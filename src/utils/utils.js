const doAsearch = (word, matrix) => {
  const reversed = true
  const horizontalArray = horizontalString(matrix)
  const verticalArray = verticalString(matrix)
  const diagonalDescArray = diagonalDescString(matrix)
  const digonalAscArray = diagonalAscString(matrix)

  return {
    horizontal: counterMatchStringInArray(word, horizontalArray),
    vertical: counterMatchStringInArray(word, verticalArray),
    diagonalDesc: counterMatchStringInArray(word, diagonalDescArray),
    diagonalAsc: counterMatchStringInArray(word, digonalAscArray),

    horizontalReversed: counterMatchStringInArray(word, horizontalArray, reversed),
    verticalReversed: counterMatchStringInArray(word, verticalArray, reversed),
    diagonalDescReversed: counterMatchStringInArray(word, diagonalDescArray, reversed),
    diagonalAscReversed: counterMatchStringInArray(word, digonalAscArray, reversed)
  }
}

const counterMatchStringInArray = (searchString, array, reversed = false) => {
  let counter = 0
  array.forEach(element => {
    if (reversed === false) {
      counter += counterMatchInString(searchString, element)
    } else {
      counter += counterMatchInString(searchString, element.split('').reverse().join(''))
    }
  })

  return counter
}

const counterMatchInString = (searchString, inThisString) => {
  if (searchString.length === 0) {
    return 0
  }

  return occurrences(inThisString.toUpperCase(), searchString.toUpperCase())
}

const getSizeRowsMatrix = (matrix) => {
  return matrix.length
}

const horizontalString = (matrix) => {
  const words = []

  matrix.forEach(row => {
    words.push(row.join(''))
  })

  return words
}

const verticalString = (matrix) => {
  const words = []

  for (let row = 0; row < getSizeRowsMatrix(matrix); row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      words[col] = (words[col] ? words[col] : '') + '' + matrix[row][col]
    }
  }

  return words
}

const diagonalDescString = (matrix) => {
  let s
  let x
  let y
  let d
  const subMatrix = []

  if (matrix && matrix.length > 0 && matrix[0].length > 0) {
    for (s = 0; s < matrix.length; s++) {
      d = []
      for (y = s, x = 0; y >= 0; y-- , x++) {
        d.push(matrix[y][x])
      }
      subMatrix.push(d)
    }
    for (s = 1; s < matrix[0].length; s++) {
      d = []
      for (y = matrix.length - 1, x = s; x < matrix[0].length; y-- , x++) {
        d.push(matrix[y][x])
      }
      subMatrix.push(d)
    }
  }
  const words = []
  subMatrix.forEach(row => {
    words.push(row.join(''))
  })
  return words
}

const diagonalAscString = (matrix) => {
  return diagonalDescString(matrix.reverse())
}

const occurrences = (string, subString, allowOverlapping) => {
  string += ''
  subString += ''
  if (subString.length <= 0) return (string.length + 1)

  let n = 0
  let pos = 0
  const step = allowOverlapping ? 1 : subString.length

  while (true) {
    pos = string.indexOf(subString, pos)
    if (pos >= 0) {
      ++n
      pos += step
    } else break
  }
  return n
}
export default {
  doAsearch
}
