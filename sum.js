module.exports = function sum(n1, n2){
  if(n2 == null || isNaN(n1) || isNaN(n2))
    return false;

  return n1 + n2;
}
