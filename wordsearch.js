const transpose = function(matrix) {
  let newResult = [];
  for (let y = 0; y < matrix[0].length; y++) {
    newResult.push([]); // create rows = to # of  original columns
    for (let x = 0; x < matrix.length; x++) {
      newResult[y][x] = matrix[x][y]; // swaps x coords and y cords
    }
  }

  return newResult;
};


const wordSearch = (letters, word) => {
  //join each individual array into one string
  const horizontalJoin = letters.map(ls => ls.join(''));
  //for each string of the new array
  for (let l of horizontalJoin) {
    //if word is present, return true
    if (l.includes(word)) {
      return true;
    }
  }
  //use the tranpose function to check for vertical words
  const transposedLetters = transpose(letters);
  //join each vertical array into one string
  const verticalJoin = transposedLetters.map(ls => ls.join(''));
 
  for (let l of verticalJoin) {
    //if word exist
    if (l.includes(word)) {
      return true;
    }
  }
  //if word doesnt exist
  return false;
};




module.exports = wordSearch;