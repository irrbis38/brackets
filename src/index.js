module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 != 0) return false;

  let pairsOfBrackets = [];

  for (let value of bracketsConfig)
    pairsOfBrackets.push(value.join(""));

  for(let j = 0; j < pairsOfBrackets.length; j++){
    if(str.includes(pairsOfBrackets[j])){
      str = str.replace(pairsOfBrackets[j], "");
      j=-1;
    }
  }
  return str.length == 0 ? true : false;
}
