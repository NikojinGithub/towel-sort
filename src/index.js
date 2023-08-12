
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined){
    return [];
  }
  return matrix.reduce((result, element, index) => {
    if(index % 2 === 0){
      result.push(...element);
    } else {
      result.push(...element.reverse());
    }
    return result;
  },[])
}