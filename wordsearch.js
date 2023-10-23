const transpose = function(matrix) {
  let i = 0;
  let newMatrix = [];
  while (i < matrix[0].length) {
    let tempRow = [];
    for (let row in matrix) {
      tempRow.push((matrix[row][i]));
    }
    newMatrix.push(tempRow);
    i ++;
  }
  return newMatrix;
};

const wordSearch = (letters, word) => {

  if (letters.length === 0) {
      return false;
  }

  const transposedLetters = transpose(letters);
  const horizontalJoin = letters.map(ls => ls.join(''));
  const transposedHorizontalJoin = transposedLetters.map(ls => ls.join(''));

  for (let row of horizontalJoin) {
      if (row.includes(word)) return true;
  } for (let row of transposedHorizontalJoin) {
      if (row.includes(word)) return true;
  } return false;
};

module.exports = wordSearch;