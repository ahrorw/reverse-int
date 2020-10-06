module.exports = function reverse (n) {
    if ((n === undefined) || (n === null)) return 0;
  
    let arrN = String(Math.abs(n)).split('');
  
    while (arrN[arrN.length-1] === '0') arrN.pop();
  
    return	eval(arrN.reverse().join(''));
  }
